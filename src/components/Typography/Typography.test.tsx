import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Typography} from './Typography'

describe('Typography', () => {
  it('renders without crashing', () => {
    render(<Typography>Hello world!!!</Typography>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
