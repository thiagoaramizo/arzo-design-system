import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray200',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray200',
  resize: 'vertical',
  minHeight: 80,

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray900',
  fontWeight: '$regular',

  '&:focus': {
    outline: 0,
    borderColor: '$cyan300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
