import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@arzo/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return(
        <Box as='label' css={{
          display: 'flex', 
          gap: '$2',
        }} >
          {Story()}
          <Text size='sm'>
            Valor de algo
          </Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
}
