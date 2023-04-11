import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@arzo/react'

export default {
  title: 'Tipography/Heading',
  component: Heading,
  args: {
    children: ('Exemplo de texto')
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustonTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o Heading é um `h2`, pode-se alterar isso com a propriedade `as`.'
      }
    }
  }
}
