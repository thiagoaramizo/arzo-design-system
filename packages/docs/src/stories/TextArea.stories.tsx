import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@arzo/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return(
        <Box as='label' css={{display: 'flex', flexDirection:'column', gap: '$2'}} >
          <Text size='sm'>Sua história</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Conte sua história'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
