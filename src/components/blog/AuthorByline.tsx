import Image from 'next/image'
import type { Author, Media } from '@/payload-types'
import { asDoc } from '@/lib/payload-helpers'

export function AuthorByline({
  author,
  size = 'md',
}: {
  author: Author
  size?: 'sm' | 'md' | 'lg'
}) {
  const avatar = asDoc<Media>(author.avatar)
  const dim = size === 'lg' ? 64 : size === 'sm' ? 36 : 48

  return (
    <div className="flex items-center gap-3.5">
      {avatar?.url ? (
        <Image
          src={avatar.url}
          alt={avatar.alt || author.name}
          width={dim}
          height={dim}
          className="border-ink h-12 w-12 flex-shrink-0 border bg-paper object-cover"
          style={{ width: dim, height: dim }}
        />
      ) : (
        <div
          className="border-ink grid flex-shrink-0 place-items-center bg-paper font-display text-base text-ink"
          style={{ width: dim, height: dim }}
        >
          {author.name.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        <div className="text-[15px] font-bold leading-tight">{author.name}</div>
        {size === 'lg' && author.bio && (
          <p className="mt-1 max-w-md text-sm leading-[1.5] text-ink/75">{author.bio}</p>
        )}
      </div>
    </div>
  )
}
