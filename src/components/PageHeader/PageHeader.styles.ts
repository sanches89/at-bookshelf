import styled from 'styled-components'

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 49px;

  > * {
    margin-left: 16px;
  }

  > *:first-child {
    margin-left: 0;
  }
`
