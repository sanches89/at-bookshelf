import React, {createContext, useContext, useState} from 'react'

import {Book} from '@/types/book'

const BooksContext = createContext<
  [Book[], React.Dispatch<React.SetStateAction<Book[]>>] | null
>(null)

export interface BooksProviderProps {
  children: React.ReactElement
}

export function BooksProvider(props: BooksProviderProps) {
  const {children} = props

  const state = useState<Book[]>([])

  return <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
}

export function useBooks() {
  const context = useContext(BooksContext)

  if (!context) {
    throw new Error(`useBooks need to be within BooksProvider`)
  }

  return context
}
