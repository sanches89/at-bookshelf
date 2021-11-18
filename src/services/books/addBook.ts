import {Book} from '@/types/book'

export async function addBook(newBook: Book) {
  const res = await fetch(
    'https://us-central1-all-turtles-interview.cloudfunctions.net/books',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    },
  )

  return res.json()
}
