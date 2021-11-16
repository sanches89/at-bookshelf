import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Content = styled.div`
  width: 600px;

  padding-top: 110px;

  margin: auto;
`
export const BookItem = styled.div``

export const BookList = styled.article`
  ${BookItem} + ${BookItem} {
    margin-top: 36px;
  }
`
