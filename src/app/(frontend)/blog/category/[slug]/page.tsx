import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogHero, PostCard } from '@/components/blog'
import { Container, RevealStagger } from '@/components/ui'
import { Footer, Nav, Ticker } from '@/components/sections'
import type { Category, Post } from '@/payload-types'

export const dynamic = 'force-dynamic'

type PageProps = { params: Promise<{ slug: string }> }

async function getCategory(slug: string): Promise<Category | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'categories',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) return { title: 'Category not found' }
  return {
    title: `${category.name} · AIxGrowth Blog`,
    description: category.description ?? `Posts in ${category.name}.`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) notFound()

  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      and: [{ _status: { equals: 'published' } }, { categories: { in: [category.id] } }],
    },
    sort: '-publishedAt',
    limit: 24,
    depth: 2,
  })

  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <BlogHero
          eyebrow={`// CATEGORY · ${category.name.toUpperCase()}`}
          title={category.name}
          sub={category.description ?? `${posts.length} post${posts.length === 1 ? '' : 's'}.`}
        />

        <Container className="py-14 md:py-20">
          {posts.length === 0 ? (
            <div className="border-ink-thick shadow-brut-lg mx-auto max-w-xl bg-paper p-10 text-center">
              <h2 className="font-display text-2xl uppercase tracking-tight">
                No Posts Yet In This Category
              </h2>
              <p className="mt-3 text-ink/70">Check back soon, or browse all posts.</p>
              <a
                href="/blog"
                className="border-ink shadow-brut brut-hover mt-6 inline-flex items-center gap-2 bg-yellow px-6 py-3 font-semibold text-ink"
              >
                ← Back to Blog
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <RevealStagger step={70}>
                {posts.map((post: Post, i: number) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    variant={
                      i % 5 === 0
                        ? 'yellow'
                        : i % 5 === 2
                          ? 'pink'
                          : i % 5 === 4
                            ? 'blue'
                            : 'paper'
                    }
                  />
                ))}
              </RevealStagger>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}
