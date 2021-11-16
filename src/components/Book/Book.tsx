import React from 'react'

import {ButtonIcon} from '@/components/ButtonIcon'
import {Card} from '@/components/Card'
import {Typography} from '@/components/Typography'

import * as S from './Book.styles'

export interface BookProps {
  bookId: string
  imgUrl: string
  title: string
  author: string
  description: string
}

export function Book(props: BookProps): React.ReactElement {
  const {bookId, imgUrl, title, author, description} = props

  const handleDeleteBook = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()

    // TODO - API
  }

  return (
    <Card as="article">
      <S.Container>
        <S.Image src={imgUrl} />
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
