import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slugField'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt', '_status'],
    livePreview: {
      url: ({ data, req }) => {
        const baseURL =
          req.payload.config.serverURL ||
          process.env.NEXT_PUBLIC_SERVER_URL ||
          'http://localhost:3000'
        const slug = data?.slug || ''
        const path = `/blog/${slug}`
        return `${baseURL}/api/preview?collection=posts&slug=${encodeURIComponent(slug)}&path=${encodeURIComponent(path)}`
      },
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  access: {
    // Public can only read published posts; admin sees everything via authenticated requests
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        _status: { equals: 'published' },
      }
    },
  },
  versions: {
    drafts: {
      autosave: { interval: 1500 },
    },
    maxPerDoc: 25,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField('title'),
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 240,
      admin: {
        description: 'Short summary shown on listing cards and used as the meta description.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayAndTime' },
        description: 'Defaults to publish time if left empty.',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Pin one post as the hero on the blog index.',
      },
    },
  ],
}
