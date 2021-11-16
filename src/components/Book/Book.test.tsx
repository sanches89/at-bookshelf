import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Book} from './Book'

describe('Book', () => {
  it('renders without crashing', () => {
    render(<Book>Hello world!!!</Book>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
