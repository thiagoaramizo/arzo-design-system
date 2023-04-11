import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@arzo/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => {
      return(
        <Box as='label' css={{display: 'flex'}} >
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 1,
  }
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  }
}

