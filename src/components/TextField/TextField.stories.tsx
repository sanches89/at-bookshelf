import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {TextField} from './TextField'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextField>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const InputText = Template.bind({})
InputText.args = {
  label: 'Input Text',
}

export const TextArea = Template.bind({})
TextArea.args = {
  label: 'Text Area',
  textArea: true,
}
