import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slugField'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    slugField('name'),
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional. Shown on the category landing page.',
      },
    },
  ],
}
