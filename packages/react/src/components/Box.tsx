import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$8 $6',
  boxShadow: '0 20px 50px 0 #12112711',
  fontFamily: '$default',
  color: '$gray500',

  variants: {
    shadow: {
      default: {
        boxShadow: '0 20px 50px 0 #12112711',
      },
      small: {
        boxShadow: '0 5px 10px 0 #12112711',
      },
      none: {
        boxShadow: 'none',
      },
    },
  },
  defaultVariants: {
    shadow: 'default',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
