import {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({theme}) => css`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

    :root {
      font-size: 62.5%;
      background-color: ${theme.color.background};

      body {
        min-height: 100vh;

        color: ${theme.color.text};

        font-family: 'Ubuntu', sans-serif;
        font-size: 1.4rem;
      }
    }

    * {
      margin: 0;
      padding: 0;
    }

    a {
      cursor: pointer;
    }

    input,
    textarea {
      &:focus-visible {
        outline: none;
      }
    }
  `}
`
