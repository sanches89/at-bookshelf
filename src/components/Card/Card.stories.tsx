import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Card} from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = args => <Card {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard = Template.bind({})
Standard.args = {
  children: 'Standard card',
}
