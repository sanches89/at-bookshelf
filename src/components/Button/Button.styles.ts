import styled, {css} from 'styled-components'

export const Container = styled.button`
  ${({theme}) => css`
    padding: 14px 22px;

    border: none;
    border-radius: 6px;

    background-color: ${theme.color.primary};

    color: ${theme.color.primaryText};
    font-weight: 700;

    cursor: pointer;

    &:disabled {
      background-color: ${theme.color.buttonIcon};

      cursor: not-allowed;
    }
  `}
`
