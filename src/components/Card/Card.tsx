import React from 'react'

import * as S from './Card.styles'

export interface CardProps {
  children: React.ReactNode
}

export function Card(props: CardProps): React.ReactElement {
  const {children} = props

  return <S.Container>{children}</S.Container>
}
