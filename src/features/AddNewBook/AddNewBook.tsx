import React from 'react'

import Link from 'next/link'
import Router from 'next/router'

import {useMutation, useQueryClient} from 'react-query'

import {Button} from '@/components/Button'
import {ButtonIcon} from '@/components/ButtonIcon'
import {PageHeader} from '@/components/PageHeader'
import {TextField} from '@/components/TextField'
import {Typography} from '@/components/Typography'
import {addBook} from '@/services/books/addBook'
import {Book} from '@/types/book'

import * as S from './AddNewBook.styles'

function isBook(value: unknown): value is Book {
  return (
    typeof value === 'object' &&
    value != null &&
    'title' in value &&
    'author' in value &&
    'description' in value &&
    'imageUrl' in value
  )
}

export function AddNewBook(): React.ReactElement {
  const queryClient = useQueryClient()

  const mutationAddBook = useMutation('books', addBook, {
    onSuccess: result => {
      queryClient.setQueryData('books', result)

      Router.push('/')
    },
  })

  const handleAddBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = Array.from(new FormData(form).entries()).reduce(
      (acc, curr) => {
        acc[curr[0]] = curr[1]
        return acc
      },
      {} as Record<string, FormDataEntryValue>,
    )

    if (!isBook(formData)) {
      return
    }

    mutationAddBook.mutate(formData)
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
