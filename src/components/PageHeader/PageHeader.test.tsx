import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {PageHeader} from './PageHeader'

describe('PageHeader', () => {
  it('renders without crashing', () => {
    render(<PageHeader>Hello world!!!</PageHeader>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
