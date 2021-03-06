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

export const FormField = styled.div``

export const Form = styled.form`
  ${FormField} + ${FormField} {
    margin-top: 52px;
  }
`

export const FormActions = styled.div`
  margin-top: 52px;
`
