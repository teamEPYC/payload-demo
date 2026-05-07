import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const slug = url.searchParams.get('slug')
  const collection = url.searchParams.get('collection')
  const path = url.searchParams.get('path')

  if (!slug || !collection || !path) {
    return new Response('Missing params', { status: 400 })
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })
  if (!user) return new Response('Unauthorized', { status: 401 })

  const result = await payload.find({
    collection: collection as 'posts',
    where: { slug: { equals: slug } },
    draft: true,
    limit: 1,
  })
  if (!result.docs.length) return new Response('Not found', { status: 404 })

  const dm = await draftMode()
  dm.enable()
  redirect(path)
}
