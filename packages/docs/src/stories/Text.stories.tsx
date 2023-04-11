import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@arzo/react'

export default {
  title: 'Tipography/Text',
  component: Text,
  args: {
    children: ( 'Exemplo de texto')
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustonTag: StoryObj<TextProps> = {
  args: {
    as: 'strong'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o Text é um `p`, pode-se alterar isso com a propriedade `as`.'
      }
    }
  }
}
