import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Layout} from './Layout'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Layout',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Layout>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
}
