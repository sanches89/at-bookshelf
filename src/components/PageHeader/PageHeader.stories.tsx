import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Button} from '@/components/Button'
import {ButtonIcon} from '@/components/ButtonIcon'
import {Typography} from '@/components/Typography'

import {PageHeader} from './PageHeader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PageHeader',
  component: PageHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PageHeader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageHeader> = args => (
  <PageHeader {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Bookshelf = Template.bind({})
Bookshelf.args = {
  children: (
    <>
      <Typography variant="pageHeader">Bookshelf</Typography>
      <Button>Add book</Button>
    </>
  ),
}

export const AddNewBook = Template.bind({})
AddNewBook.args = {
  children: (
    <>
      <Typography variant="pageHeader">Add a new book</Typography>
      <ButtonIcon icon="times" size={30} />
    </>
  ),
}
