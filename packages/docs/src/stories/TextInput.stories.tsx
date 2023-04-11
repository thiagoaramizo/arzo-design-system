import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@arzo/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return(
        <Box as='label' 
          css={{
            display: 'flex', 
            flexDirection:'column', 
            gap: '$2',
          }} >
          <Text size='sm'>
            Valor de algo
          </Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Informe o valor'
  }
}

export const WhitPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'R$'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}
