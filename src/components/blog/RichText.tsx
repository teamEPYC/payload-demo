import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { cn } from '@/lib/cn'

export function RichText({
  data,
  className,
}: {
  data: SerializedEditorState
  className?: string
}) {
  return (
    <div
      className={cn(
        // Brutalist long-form: chunky headings, generous line-height, ink links underlined
        'prose-content max-w-none text-[17px] leading-[1.65] text-ink/90',
        '[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:leading-tight',
        '[&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:uppercase [&_h3]:tracking-tight',
        '[&_h4]:mt-8 [&_h4]:mb-3 [&_h4]:font-display [&_h4]:text-xl [&_h4]:uppercase',
        '[&_p]:mb-5',
        '[&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:font-semibold hover:[&_a]:bg-yellow',
        '[&_strong]:font-bold',
        '[&_em]:italic',
        '[&_ul]:my-5 [&_ul]:pl-6 [&_ul]:list-disc [&_ul_li]:mb-2',
        '[&_ol]:my-5 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol_li]:mb-2',
        '[&_blockquote]:my-7 [&_blockquote]:border-l-[6px] [&_blockquote]:border-ink [&_blockquote]:bg-yellow [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:font-display [&_blockquote]:text-xl [&_blockquote]:uppercase [&_blockquote]:leading-tight',
        '[&_code]:font-mono [&_code]:text-[0.9em] [&_code]:bg-ink [&_code]:text-yellow [&_code]:px-1.5 [&_code]:py-0.5',
        '[&_pre]:my-6 [&_pre]:border-ink [&_pre]:border-[3px] [&_pre]:bg-ink [&_pre]:text-paper [&_pre]:p-5 [&_pre]:overflow-x-auto [&_pre]:font-mono [&_pre]:text-sm',
        '[&_hr]:my-10 [&_hr]:border-0 [&_hr]:border-t-[3px] [&_hr]:border-ink',
        '[&_img]:my-7 [&_img]:border-ink [&_img]:border-[3px]',
        className,
      )}
    >
      <LexicalRichText data={data} />
    </div>
  )
}
