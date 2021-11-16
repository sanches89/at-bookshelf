import React, {useEffect, useState} from 'react'

import Link from 'next/link'

import {Book} from '@/components/Book'
import {Button} from '@/components/Button'
import {PageHeader} from '@/components/PageHeader'
import {Typography} from '@/components/Typography'
import {useBooks} from '@/contexts/BooksContext'

import * as S from './Home.styles'

export function Home(): React.ReactElement {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [books, setBooks] = useBooks()

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true)

      try {
        const res = await fetch(
          'https://us-central1-all-turtles-interview.cloudfunctions.net/books',
        )
        const data = await res.json()

        setBooks(data)
      } catch (e) {
        setError(e as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  const handleDeleteBook = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookId: string,
  ) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch(
        `https://us-central1-all-turtles-interview.cloudfunctions.net/books/${bookId}`,
        {method: 'delete'},
      )

      const data = await res.json()

      setBooks(data)
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Container>
      <S.Content>
        <PageHeader>
          <Typography variant="pageHeader">Bookshelf</Typography>
          <Link href="/add-a-new-book">
            <a>
              <Button>Add book</Button>
            </a>
          </Link>
        </PageHeader>
        <S.BookList>
          {books.map(book => (
            <S.BookItem key={book.id}>
              <Book
                {...book}
                onDelete={e => {
                  handleDeleteBook(e, book.id)
                }}
              />
            </S.BookItem>
          ))}
        </S.BookList>
      </S.Content>
    </S.Container>
  )
}
