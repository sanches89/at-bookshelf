import React, {ButtonHTMLAttributes} from 'react'

import * as S from './Button.styles'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode
}

export function Button(props: ButtonProps): React.ReactElement {
  return <S.Container {...props} />
}
