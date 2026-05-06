import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogHero, FeaturedPostCard, PostCard } from '@/components/blog'
import { Container, Reveal, RevealStagger } from '@/components/ui'
import { Footer, Nav, Ticker } from '@/components/sections'
import type { Post } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog · AIxGrowth',
  description: 'Notes on AI marketing, growth systems, and what we ship every week.',
}

export default async function BlogIndexPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 12,
    depth: 2,
  })

  const featured = posts.find((p) => p.featured) ?? posts[0] ?? null
  const rest = posts.filter((p) => p.id !== featured?.id)

  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <BlogHero
          eyebrow="// THE BLOG"
          title={
            <>
              Notes On{' '}
              <span className="border-ink shadow-brut my-1 inline-block bg-yellow px-3 py-0.5">
                Growth
              </span>{' '}
              & The Systems We Ship.
            </>
          }
          sub="Tactics, teardowns, and the AI workflows behind our best-performing client engagements. New post most weeks."
        />

        <Container className="py-14 md:py-20">
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {featured && (
                <Reveal>
                  <FeaturedPostCard post={featured} />
                </Reveal>
              )}

              {rest.length > 0 && (
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <RevealStagger step={70}>
                    {rest.map((post: Post, i: number) => (
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
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

function EmptyState() {
  return (
    <div className="border-ink-thick shadow-brut-lg mx-auto max-w-xl bg-paper p-10 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
        // NO POSTS YET
      </p>
      <h2 className="mt-4 font-display text-3xl uppercase tracking-tight">
        The Press Hasn&apos;t Started Yet.
      </h2>
      <p className="mt-3 text-ink/80">
        Publish your first post from the admin panel and it&apos;ll show up here.
      </p>
      <a
        href="/admin/collections/posts/create"
        className="border-ink shadow-brut brut-hover mt-6 inline-flex items-center gap-2 bg-yellow px-6 py-3 font-semibold text-ink"
      >
        Create First Post →
      </a>
    </div>
  )
}
