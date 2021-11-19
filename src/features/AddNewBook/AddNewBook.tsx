import React from 'react'

import Link from 'next/link'

import {yupResolver} from '@hookform/resolvers/yup/dist/yup'
import {useForm} from 'react-hook-form'
import {useMutation, useQueryClient} from 'react-query'
import * as yup from 'yup'

import {Button} from '@/components/Button'
import {ButtonIcon} from '@/components/ButtonIcon'
import {Layout} from '@/components/Layout'
import {PageHeader} from '@/components/PageHeader'
import {TextField} from '@/components/TextField'
import {Typography} from '@/components/Typography'
import {addBook} from '@/services/books/addBook'
import {Book, isBook} from '@/types/book'

import * as S from './AddNewBook.styles'

const schema = yup.object().shape({
  title: yup.string().required('Required field'),
  author: yup.string().required('Required field'),
  description: yup.string().required('Required field'),
  imageUrl: yup.string().url('Invalid URL').required('Required field'),
})

export function AddNewBook(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const queryClient = useQueryClient()

  const mutationAddBook = useMutation('books', addBook, {
    onSuccess: result => {
      queryClient.setQueryData('books', result)

      reset()
    },
  })

  const onSubmitHandler = (data: Partial<Book>) => {
    if (!isBook(data)) {
      return
    }

    mutationAddBook.mutate(data)
  }

  return (
    <Layout>
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
          <S.Form onSubmit={handleSubmit<Partial<Book>>(onSubmitHandler)}>
            <S.FormField>
              <TextField
                label="Title"
                error={errors.title}
                errorMessage={errors.title?.message}
                {...register('title')}
              />
            </S.FormField>
            <S.FormField>
              <TextField
                label="Author"
                error={errors.author}
                errorMessage={errors.author?.message}
                {...register('author')}
              />
            </S.FormField>
            <S.FormField>
              <TextField
                label="Description"
                textArea
                error={errors.description}
                errorMessage={errors.description?.message}
                {...register('description')}
              />
            </S.FormField>
            <S.FormField>
              <TextField
                label="Image URL"
                error={errors.imageUrl}
                errorMessage={errors.imageUrl?.message}
                {...register('imageUrl')}
              />
            </S.FormField>

            <S.FormActions>
              <Button disabled={mutationAddBook.isLoading}>Save</Button>
            </S.FormActions>
          </S.Form>
        </S.Content>
      </S.Container>
    </Layout>
  )
}
