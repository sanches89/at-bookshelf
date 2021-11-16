import React, {useState} from 'react'

import {ButtonIcon} from '@/components/ButtonIcon'
import {Card} from '@/components/Card'
import {Typography} from '@/components/Typography'
import {useBooks} from '@/contexts/BooksContext'

import * as S from './Book.styles'

export interface BookProps {
  bookId: string
  imageUrl: string
  title: string
  author: string
  description: string
}

export function Book(props: BookProps): React.ReactElement {
  const {bookId, imageUrl, title, author, description, ...otherProps} = props

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [, setBooks] = useBooks()

  const handleDeleteBook = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
    <Card as="article" {...otherProps}>
      <S.Container>
        <S.Image src={imageUrl} />
        <S.Content>
          <S.Header>
            <Typography variant="cardHeader">{title}</Typography>
            <ButtonIcon icon="trash" onClick={handleDeleteBook} />
          </S.Header>
          <S.Author>
            <Typography variant="cardAuthor">{author}</Typography>
          </S.Author>
          <Typography variant="paragraph">{description}</Typography>
        </S.Content>
      </S.Container>
    </Card>
  )
}
