/**
 * Payload relationships return either a populated doc (with `depth >= 1`)
 * or just an ID string. These helpers narrow the type safely.
 */

export function isDoc<T extends { id: string | number }>(value: unknown): value is T {
  return typeof value === 'object' && value !== null && 'id' in value
}

export function asDoc<T extends { id: string | number }>(value: T | string | number | null | undefined): T | null {
  return isDoc<T>(value) ? value : null
}

export function asDocs<T extends { id: string | number }>(
  value: Array<T | string | number> | null | undefined,
): T[] {
  if (!Array.isArray(value)) return []
  return value.filter(isDoc<T>)
}

export function formatDate(input?: string | null): string {
  if (!input) return ''
  const d = new Date(input)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
