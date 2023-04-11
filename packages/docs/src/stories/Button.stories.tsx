import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@arzo/react'
import { CheckCircle } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar'
  },
  argTypes: {
    variant: {
      options: ['default', 'outline', 'soft', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    }
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args:{
    variant: 'default',
    size: 'md',
    disabled: false
  }
}

export const WhitIcon: StoryObj<ButtonProps> = {
  args: {
    children: <><CheckCircle/> Enviar</>,
    variant: 'default',
    size: 'md'
  }
}

export const Outline: StoryObj<ButtonProps> = {
  args:{
    variant: 'outline',
    size: 'md'
  }
}

export const Soft: StoryObj<ButtonProps> = {
  args:{
    variant: 'soft',
    size: 'md'
  }
}

export const Text: StoryObj<ButtonProps> = {
  args:{
    variant: 'text',
    size: 'md'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args:{
    variant: 'default',
    size: 'sm'
  }
}

export const Large: StoryObj<ButtonProps> = {
  args:{
    variant: 'default',
    size: 'lg'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args:{
    variant: 'default',
    size: 'md',
    disabled: true
  }
}
