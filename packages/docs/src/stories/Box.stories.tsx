import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@arzo/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Texto em uma box'
  },
  argTypes: {
    shadow: {
      options: ['default', 'small', 'none'],
      control: { type: 'radio' },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {
  args: {
    shadow: 'default'
  }
}
