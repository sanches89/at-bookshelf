import React, {forwardRef} from 'react'

import * as S from './TextField.styles'

export interface TextFieldProps {
  label: React.ReactNode
  textArea?: boolean
  error?: boolean
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {label, textArea = false, error = false, ...inputProps} = props

    const textAreaProps = textArea ? {rows: 5} : {}

    return (
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.Input
          ref={ref}
          as={textArea ? 'textarea' : 'input'}
          error={error}
          {...textAreaProps}
          {...inputProps}
        />
      </S.Container>
    )
  },
)

TextField.displayName = 'TextField'
