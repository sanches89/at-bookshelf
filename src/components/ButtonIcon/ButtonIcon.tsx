import React, {ButtonHTMLAttributes} from 'react'

import * as S from './ButtonIcon.styles'
import {Times} from './icons/Times'
import {Trash} from './icons/Trash'

export type Icon = 'trash' | 'times'

export interface ButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: Icon
}

export function ButtonIcon(props: ButtonIconProps): React.ReactElement {
  const {icon, ...otherProps} = props

  return (
    <S.Container {...otherProps}>
      {icon === 'trash' ? <Trash /> : <Times />}
    </S.Container>
  )
}
