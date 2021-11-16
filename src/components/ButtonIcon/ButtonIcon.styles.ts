import styled from 'styled-components'

export const Container = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 100%;

  padding: 6px;

  background-color: transparent;

  color: ${p => p.theme.color.buttonIcon};
  font-size: 2.1rem;

  cursor: pointer;
`
