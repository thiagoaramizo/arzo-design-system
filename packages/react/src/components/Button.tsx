import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:not(:disabled):hover': {
    transition: 'all 0.3s',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  svg: {
    width: '$5',
    height: '$5',
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$cyan500',
        border: 0,
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$cyan600',
        },
      },
      soft: {
        backgroundColor: '$cyan100',
        border: 0,
        color: '$cyan800',

        '&:not(:disabled):hover': {
          backgroundColor: '$cyan200',
        },
      },
      outline: {
        border: '2px solid $cyan500',
        color: '$cyan500',

        '&:not(:disabled):hover': {
          borderColor: '$cyan600',
          color: '$cyan600',
        },
      },
      text: {
        border: 0,
        color: '$cyan500',

        '&:not(:disabled):hover': {
          color: '$cyan600',
        },
      },
    },
    size: {
      md: {
        padding: '0 $6',
        height: 40,
        fontSize: '$sm',
      },
      sm: {
        padding: '0 $5',
        height: 36,
        fontSize: '$xs',
      },
      lg: {
        padding: '0 $8',
        height: 52,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>

Button.displayName = 'Button'
