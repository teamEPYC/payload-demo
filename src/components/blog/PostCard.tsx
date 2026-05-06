import Image from 'next/image'
import Link from 'next/link'
import type { Author, Category, Media, Post } from '@/payload-types'
import { asDoc, asDocs, formatDate } from '@/lib/payload-helpers'

const VARIANT_BG = {
  paper: 'bg-paper',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  blue: 'bg-blue text-paper',
}

export type PostCardVariant = keyof typeof VARIANT_BG

export function PostCard({
  post,
  variant = 'paper',
}: {
  post: Post
  variant?: PostCardVariant
}) {
  const cover = asDoc<Media>(post.coverImage)
  const author = asDoc<Author>(post.author)
  const categories = asDocs<Category>(post.categories)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group border-ink-thick shadow-brut-lg block overflow-hidden text-ink transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_0_var(--color-ink)] ${VARIANT_BG[variant]}`}
    >
      {/* Cover */}
      {cover?.url && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b-[3px] border-ink bg-bg">
          <Image
            src={cover.url}
            alt={cover.alt || post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="p-6">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories.slice(0, 2).map((c) => (
              <span
                key={c.id}
                className="border-ink bg-paper inline-block border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-ink"
              >
                {c.name}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-display text-2xl uppercase leading-[1.05] tracking-tight">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-[15px] leading-[1.5] opacity-90">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t-2 border-current/20 pt-4 font-mono text-[11px] uppercase tracking-[0.08em] opacity-80">
          <span>{author?.name ?? 'AIxGrowth'}</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
      </div>
    </Link>
  )
}
