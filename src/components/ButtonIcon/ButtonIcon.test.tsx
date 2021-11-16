import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {ButtonIcon} from './ButtonIcon'

describe('ButtonIcon', () => {
  it('renders without crashing', () => {
    render(<ButtonIcon>Hello world!!!</ButtonIcon>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
