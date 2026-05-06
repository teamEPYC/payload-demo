import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { AuthorByline, PostCard, RichText } from '@/components/blog'
import { Container, Eyebrow, Reveal, RevealStagger } from '@/components/ui'
import { Footer, Nav, Ticker } from '@/components/sections'
import { asDoc, asDocs, formatDate } from '@/lib/payload-helpers'
import type { Author, Category, Media, Post } from '@/payload-types'

export const dynamic = 'force-dynamic'

type PageProps = { params: Promise<{ slug: string }> }

async function getPost(slug: string): Promise<Post | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      _status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post not found' }
  const cover = asDoc<Media>(post.coverImage)
  return {
    title: `${post.title} · AIxGrowth Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: cover?.url ? [{ url: cover.url }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const cover = asDoc<Media>(post.coverImage)
  const author = asDoc<Author>(post.author)
  const categories = asDocs<Category>(post.categories)

  // Related: same category, exclude self, max 3
  const payload = await getPayload({ config })
  const categoryIds = categories.map((c) => c.id)
  const related =
    categoryIds.length > 0
      ? (
          await payload.find({
            collection: 'posts',
            where: {
              and: [
                { _status: { equals: 'published' } },
                { id: { not_equals: post.id } },
                { categories: { in: categoryIds } },
              ],
            },
            sort: '-publishedAt',
            limit: 3,
            depth: 2,
          })
        ).docs
      : []

  return (
    <>
      <Ticker />
      <Nav />
      <main>
        {/* Article header */}
        <header className="border-ink-thick border-b bg-bg py-12 md:py-16">
          <Container>
            <Reveal>
              <Link
                href="/blog"
                className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60 transition-colors hover:text-ink"
              >
                ← Back to Blog
              </Link>

              {categories.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/blog/category/${c.slug}`}
                      className="border-ink shadow-brut-sm bg-yellow inline-block px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] transition-transform hover:-translate-y-0.5"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="mt-5 max-w-4xl font-display uppercase tracking-tight leading-[0.98] text-[clamp(36px,5vw,68px)]">
                {post.title}
              </h1>

              <p className="mt-5 max-w-2xl text-xl leading-[1.45] text-ink/80">{post.excerpt}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {author && <AuthorByline author={author} />}
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
            </Reveal>
          </Container>
        </header>

        {/* Cover image */}
        {cover?.url && (
          <div className="border-ink-thick border-b bg-bg">
            <Container className="py-10">
              <Reveal>
                <div className="border-ink-thick shadow-brut-xl relative aspect-[16/9] w-full overflow-hidden bg-paper">
                  <Image
                    src={cover.url}
                    alt={cover.alt || post.title}
                    fill
                    sizes="(min-width: 1280px) 1280px, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </Container>
          </div>
        )}

        {/* Body */}
        <article className="bg-paper py-14 md:py-20">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <RichText data={post.content} />
              </div>
            </Reveal>

            {author && (
              <Reveal>
                <div className="border-ink-thick mx-auto mt-16 max-w-3xl bg-bg p-7 shadow-brut-lg">
                  <Eyebrow>// WRITTEN BY</Eyebrow>
                  <div className="mt-4">
                    <AuthorByline author={author} size="lg" />
                  </div>
                </div>
              </Reveal>
            )}
          </Container>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-ink-thick border-t bg-bg py-16 md:py-20">
            <Container>
              <Reveal>
                <Eyebrow>// KEEP READING</Eyebrow>
                <h2 className="mt-4 font-display text-3xl uppercase tracking-tight md:text-4xl">
                  Related Posts
                </h2>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <RevealStagger>
                  {related.map((p, i) => (
                    <PostCard
                      key={p.id}
                      post={p}
                      variant={i === 0 ? 'yellow' : i === 1 ? 'pink' : 'blue'}
                    />
                  ))}
                </RevealStagger>
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
