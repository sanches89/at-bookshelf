import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Card} from './Card'

describe('Card', () => {
  it('renders without crashing', () => {
    render(<Card>Hello world!!!</Card>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
