import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {AddNewBook} from './AddNewBook'

describe('AddNewBook', () => {
  it('renders without crashing', () => {
    render(<AddNewBook>Hello world!!!</AddNewBook>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
