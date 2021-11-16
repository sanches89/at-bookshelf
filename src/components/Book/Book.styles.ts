import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.section`
  display: flex;

  flex-direction: column;

  flex-grow: 1;

  margin-left: 16px;
`

export const Header = styled.header`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;
`

export const Author = styled.div`
  margin: 10px 0;
`

export const Image = styled.img`
  max-height: 200px;
  max-width: 125px;
`
