import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const Content = styled.div`
  width: 600px;

  padding: 110px 0;

  margin: auto;
`

export const FormField = styled.div``

export const Form = styled.form`
  ${FormField} + ${FormField} {
    margin-top: 52px;
  }

  textarea {
    resize: none;
  }
`

export const FormActions = styled.div`
  margin-top: 52px;
`
