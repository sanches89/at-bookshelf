import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Layout} from './Layout'

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout>Hello world!!!</Layout>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
