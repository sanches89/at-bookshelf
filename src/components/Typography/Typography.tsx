import React from 'react'

import * as S from './Typography.styles'

export type Variant = 'pageHeader' | 'cardHeader' | 'cardAuthor' | 'paragraph'

export interface TypographyProps {
  children: React.ReactNode
  variant?: Variant
}

export function Typography(props: TypographyProps): React.ReactElement {
  const {children, variant = 'paragraph'} = props

  const as = {
    pageHeader: 'h1',
    cardHeader: 'h2',
    cardAuthor: 'span',
    paragraph: 'p',
  }[variant] as any

  return (
    <S.Container as={as} variant={variant}>
      {children}
    </S.Container>
  )
}
