import styled, {css} from 'styled-components'

export const Container = styled.div``

export const Label = styled.label`
  ${({theme}) => css`
    display: flex;

    align-items: baseline;
    justify-content: space-between;

    margin-bottom: 9px;

    font-weight: 700;

    & > span.-error {
      color: ${theme.color.error};
    }
  `}
`

export const Input = styled.input`
  ${({theme}) => css`
    width: 100%;

    border: 1px solid ${theme.color.inputBorder};
    border-radius: 4px;

    padding: 9px 16px;

    background-color: ${theme.color.inputBackground};

    &.-error {
      border-color: ${theme.color.error};
    }
  `}
`
