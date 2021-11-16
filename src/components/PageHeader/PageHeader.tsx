import React from 'react'

import * as S from './PageHeader.styles'

export interface PageHeaderProps {
  children: React.ReactNode
}

export function PageHeader(props: PageHeaderProps): React.ReactElement {
  const {children} = props

  return <S.Container>{children}</S.Container>
}
