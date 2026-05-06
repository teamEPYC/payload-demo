import Image from 'next/image'
import Link from 'next/link'
import type { Author, Category, Media, Post } from '@/payload-types'
import { asDoc, asDocs, formatDate } from '@/lib/payload-helpers'

export function FeaturedPostCard({ post }: { post: Post }) {
  const cover = asDoc<Media>(post.coverImage)
  const author = asDoc<Author>(post.author)
  const categories = asDocs<Category>(post.categories)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group border-ink-thick shadow-brut-xl grid grid-cols-1 overflow-hidden bg-paper text-ink transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0_0_var(--color-ink)] md:grid-cols-2"
    >
      {cover?.url && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b-[3px] border-ink md:aspect-auto md:border-b-0 md:border-r-[3px]">
          <Image
            src={cover.url}
            alt={cover.alt || post.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="border-ink shadow-brut-sm absolute left-4 top-4 bg-red px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-paper">
            ★ FEATURED
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center p-8 md:p-10">
        {categories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.slice(0, 3).map((c) => (
              <span
                key={c.id}
                className="border-ink bg-yellow inline-block border px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em]"
              >
                {c.name}
              </span>
            ))}
          </div>
        )}

        <h2 className="font-display text-3xl uppercase leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
          {post.title}
        </h2>

        <p className="mt-4 text-[17px] leading-[1.5] text-ink/80">{post.excerpt}</p>

        <div className="mt-6 flex items-center justify-between border-t-2 border-ink/20 pt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink/70">
          <span>{author?.name ?? 'AIxGrowth'}</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
      </div>
    </Link>
  )
}
