import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@arzo/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/thiagoaramizo.png',
    alt: 'Thiago Aramizo'
  }
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Thiago Aramizo'
  }
}