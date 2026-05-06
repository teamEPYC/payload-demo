import type { Field } from 'payload'

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]+/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Auto-generates a URL slug from another field (default: `title`).
 * - Auto-fills on create if empty
 * - Manually editable in admin
 * - Indexed + unique
 */
export function slugField(sourceField: string = 'title'): Field {
  return {
    name: 'slug',
    type: 'text',
    required: true,
    unique: true,
    index: true,
    admin: {
      position: 'sidebar',
      description: `Auto-generated from "${sourceField}". Edit only if you need a custom URL.`,
    },
    hooks: {
      beforeValidate: [
        ({ data, value, operation }) => {
          if (typeof value === 'string' && value.length > 0) {
            return slugify(value)
          }
          if (operation === 'create' && data && typeof data[sourceField] === 'string') {
            return slugify(data[sourceField] as string)
          }
          return value
        },
      ],
    },
  }
}
