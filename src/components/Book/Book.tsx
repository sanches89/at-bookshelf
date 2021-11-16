import React from 'react'

import {ButtonIcon} from '@/components/ButtonIcon'
import {Card} from '@/components/Card'
import {Typography} from '@/components/Typography'

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

  const handleDeleteBook = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()

    // TODO - API
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
