import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {
  width: '100%',
})

export const Label = styled(Text, {
  fontSize: '$xs',
  color: '$gray400',
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray300',

  '&[data-fill=true]': {
    backgroundColor: '$cyan500',
  },
})
