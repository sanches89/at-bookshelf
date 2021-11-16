import React from 'react'

import {ButtonIcon} from '@/components/ButtonIcon'
import {Card} from '@/components/Card'
import {Typography} from '@/components/Typography'

import * as S from './Book.styles'

export interface BookProps {
  imageUrl: string
  title: string
  author: string
  description: string
  onDelete?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const noop = () => void 0

export function Book(props: BookProps): React.ReactElement {
  const {
    imageUrl,
    title,
    author,
    description,
    onDelete = noop,
    ...otherProps
  } = props

  return (
    <Card as="article" {...otherProps}>
      <S.Container>
        <S.Image src={imageUrl} />
        <S.Content>
          <S.Header>
            <Typography variant="cardHeader">{title}</Typography>
            <ButtonIcon icon="trash" onClick={onDelete} />
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
