import React, {useState} from 'react'

import Link from 'next/link'
import Router from 'next/router'

import {Button} from '@/components/Button'
import {ButtonIcon} from '@/components/ButtonIcon'
import {PageHeader} from '@/components/PageHeader'
import {TextField} from '@/components/TextField'
import {Typography} from '@/components/Typography'

import * as S from './AddNewBook.styles'

export function AddNewBook(): React.ReactElement {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const handleAddBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const form = e.currentTarget
    const formData = Array.from(new FormData(form).entries()).reduce(
      (acc, curr) => {
        acc[curr[0]] = curr[1]
        return acc
      },
      {} as Record<string, FormDataEntryValue>,
    )

    try {
      await fetch(
        'https://us-central1-all-turtles-interview.cloudfunctions.net/books',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
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
        <S.Form onSubmit={handleAddBook}>
          <S.FormField>
            <TextField label="Title" name="title" />
          </S.FormField>
          <S.FormField>
            <TextField label="Author" name="author" />
          </S.FormField>
          <S.FormField>
            <TextField label="Description" name="description" textArea />
          </S.FormField>
          <S.FormField>
            <TextField label="Image URL" name="imageUrl" />
          </S.FormField>

          <S.FormActions>
            <Button>Save</Button>
          </S.FormActions>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
