import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'

import classNames from 'classnames'
import {v4 as uuidv4} from 'uuid'

import * as S from './TextField.styles'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode
  textArea?: boolean
  error?: boolean
  errorMessage?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      label,
      textArea = false,
      error = false,
      errorMessage,
      id,
      className,
      ...inputProps
    } = props

    const [inputId, setInputId] = useState(id)

    useEffect(() => {
      if (id) {
        return
      }

      setInputId(uuidv4())
    }, [])

    const textAreaProps = textArea ? {rows: 5} : {}

    return (
      <S.Container className={className}>
        <S.Label htmlFor={inputId}>
          {label}
          {errorMessage && (
            <span className={classNames({'-error': error})}>
              {' '}
              {errorMessage}
            </span>
          )}
        </S.Label>
        <S.Input
          ref={ref}
          as={textArea ? 'textarea' : 'input'}
          id={inputId}
          className={classNames({'-error': error})}
          {...textAreaProps}
          {...inputProps}
        />
      </S.Container>
    )
  },
)

TextField.displayName = 'TextField'
