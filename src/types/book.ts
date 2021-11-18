export interface Book {
  id: string
  description: string
  imageUrl: string
  author: string
  title: string
}

export function isBook(value: unknown): value is Book {
  return (
    typeof value === 'object' &&
    value != null &&
    'title' in value &&
    'author' in value &&
    'description' in value &&
    'imageUrl' in value
  )
}
