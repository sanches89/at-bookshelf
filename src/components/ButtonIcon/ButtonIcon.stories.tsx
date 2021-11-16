import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {ButtonIcon} from './ButtonIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonIcon> = args => (
  <ButtonIcon {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Trash = Template.bind({})
Trash.args = {
  icon: 'trash',
}

export const Times = Template.bind({})
Times.args = {
  icon: 'times',
}
