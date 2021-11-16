import React, {ButtonHTMLAttributes} from 'react'

import * as S from './ButtonIcon.styles'
import {Times} from './icons/Times'
import {Trash} from './icons/Trash'

export type Icon = 'trash' | 'times'

export interface ButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: Icon
  size?: number
}

export function ButtonIcon(props: ButtonIconProps): React.ReactElement {
  const {icon, size = 21, ...otherProps} = props

  return (
    <S.Container {...otherProps}>
      {icon === 'trash' ? <Trash size={size} /> : <Times size={size} />}
    </S.Container>
  )
}
