import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Typography} from './Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Typography>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const PageHeader = Template.bind({})
PageHeader.args = {
  children: 'Page Header',
  variant: 'pageHeader',
}

export const CardHeader = Template.bind({})
CardHeader.args = {
  children: 'Card Header',
  variant: 'cardHeader',
}

export const CardAuthor = Template.bind({})
CardAuthor.args = {
  children: 'Card Author',
  variant: 'cardAuthor',
}

export const Paragraph = Template.bind({})
Paragraph.args = {
  children: [
    'Ullamco aute laboris qui excepteur do nisi eiusmod elit reprehenderit.',
    'Ullamco tempor consequat velit sit officia voluptate mollit aliquip.',
    'Lorem tempor sunt enim proident in minim exercitation minim.',
    'Nostrud deserunt laboris nulla commodo incididunt eu.',
    'Occaecat quis proident ea exercitation.',
    'Velit fugiat nostrud voluptate consequat commodo nulla est voluptate pariatur.',
    'Et laborum ullamco labore excepteur minim consectetur proident sint ad.',
  ].join(' '),
  variant: 'paragraph',
}
