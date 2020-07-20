import React from 'react'
import Box, {BoxProps} from './Box'
import styled from 'styled-components'
import { variant } from 'styled-system'
import Loader from './Loader'

type Variants = "primary" | "secondary"

interface StyledBtnProps extends BoxProps{
  variant?: Variants
}

const StyledBtn = styled(Box)<StyledBtnProps>(
  {
    transition: 'all 200ms ease-in-out',
    textTransform: 'uppercase',
    outline: 'none'
  },
  variant({
    variants: {
      primary: {
        borderColor: 'secondary',
        bg: 'transparent',
        color: 'text',
        '&:hover': {
          color: 'dark',
          bg: 'secondary',
        },
      },
      secondary: {
        borderColor: 'transparent',
        bg: 'primary',
        color: 'text',
        '&:hover': {
          borderColor:'secondary',
          color: 'secondary',
          bg: 'transparent',
        },
      },
    },
  })
)

StyledBtn.defaultProps = {
  paddingY: 1,
  paddingX: 5,
  fontWeight: 'bold',
  fontSize: 2,
  borderWidth: 2,
  borderStyle: 'outline',
  variant: 'primary',
}

interface ButtonProps {
  children: React.ReactNode
  isLoading?: Boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({isLoading,children, ...rest}:ButtonProps){
  
  return <StyledBtn {...rest} as="button">{
    isLoading ? <Loader aria-label="loading"/> : children
  }</StyledBtn>
}


export default Button