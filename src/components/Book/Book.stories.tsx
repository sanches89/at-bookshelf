import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Book} from './Book'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Book',
  component: Book,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Book>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Book> = args => <Book {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard = Template.bind({})
Standard.args = {
  bookId: '1',
  imageUrl: 'https://picsum.photos/125/200',
  title: 'Atomic Habits',
  author: 'James Clear',
  description: `No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.`,
}
