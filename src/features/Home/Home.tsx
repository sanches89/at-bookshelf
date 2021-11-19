import React from 'react'

import Link from 'next/link'

import {useQuery, useMutation, useQueryClient} from 'react-query'

import {Book} from '@/components/Book'
import {Button} from '@/components/Button'
import {Layout} from '@/components/Layout'
import {PageHeader} from '@/components/PageHeader'
import {Typography} from '@/components/Typography'
import {deleteBook} from '@/services/books/deleteBook'
import {getBooks} from '@/services/books/getBooks'
import {Book as IBook} from '@/types/book'

import * as S from './Home.styles'

export function Home(): React.ReactElement {
  const queryClient = useQueryClient()

  const queryGetBooks = useQuery<IBook[], Error>('books', getBooks)
  const mutationDeleteBook = useMutation('books', deleteBook, {
    onSuccess: result => {
      queryClient.setQueryData('books', result)
    },
  })

  const handleDeleteBook = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    bookId: string,
  ) => {
    e.preventDefault()

    mutationDeleteBook.mutate(bookId)
  }

  return (
    <Layout>
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
            {(queryGetBooks.data ?? []).map(book => (
              <S.BookItem key={book.id}>
                <Book
                  {...book}
                  onDelete={e => {
                    handleDeleteBook(e, book.id)
                  }}
                />
              </S.BookItem>
            ))}

            {queryGetBooks.isLoading && <S.BookItem>Loading...</S.BookItem>}
          </S.BookList>
        </S.Content>
      </S.Container>
    </Layout>
  )
}
