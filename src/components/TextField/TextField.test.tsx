import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {TextField} from './TextField'

describe('TextField', () => {
  it('renders without crashing', () => {
    render(<TextField label="Test" />)
    expect(screen.getByText(/Test/)).toBeInTheDocument()
  })
})
