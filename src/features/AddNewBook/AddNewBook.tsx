import React, {useEffect, useState} from 'react'

import Link from 'next/link'
import Router from 'next/router'

import {ButtonIcon} from '@/components/ButtonIcon'
import {PageHeader} from '@/components/PageHeader'
import {Typography} from '@/components/Typography'

import * as S from './AddNewBook.styles'

export function AddNewBook(): React.ReactElement {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const handleAddBook = async () => {
    setLoading(true)

    try {
      await fetch(
        'https://us-central1-all-turtles-interview.cloudfunctions.net/books',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      Router.push('/')
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Container>
      <S.Content>
        <PageHeader>
          <Typography variant="pageHeader">Add a new book</Typography>
          <Link href="/">
            <a>
              <ButtonIcon icon="times" size={32} />
            </a>
          </Link>
        </PageHeader>
      </S.Content>
    </S.Container>
  )
}
