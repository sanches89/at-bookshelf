import React from 'react'

import {addDecorator} from '@storybook/react'
import {ThemeProvider} from 'styled-components'

import {GlobalStyle} from '../src/styles/GlobalStyle'
import {theme} from '../src/styles/theme'
import {BookProvider} from '../src/contexts/BooksContext'

const StylesDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
)

addDecorator(StylesDecorator)

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
