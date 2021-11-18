import {Book} from '@/types/book'

export async function deleteBook(bookId: string): Promise<Book[]> {
  const res = await fetch(
    `https://us-central1-all-turtles-interview.cloudfunctions.net/books/${bookId}`,
    {method: 'delete'},
  )

  return res.json()
}
