import styled from 'styled-components'

export const Container = styled.div``

export const Label = styled.label`
  display: block;

  margin-bottom: 9px;

  font-weight: 700;
`

export const Input = styled.input<{error?: boolean}>`
  width: 100%;

  border: 1px solid
    ${p =>
      p.error ? p.theme.color.inputBorderError : p.theme.color.inputBorder};
  border-radius: 4px;

  padding: 9px 16px;

  background-color: ${p => p.theme.color.inputBackground};
`
