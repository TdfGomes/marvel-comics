import React from 'react'
import Box, { BoxProps } from './Box'
import styled from 'styled-components'

const BaseUl = styled(Box)<BoxProps>`
  padding:0;
  margin: ${({theme}) => `${theme.space[4]} 0 0`};
  list-style: none;
`

const BaseLi = styled(Box)<BoxProps>``

export function Ul(props:React.PropsWithChildren<{}>) {
  const {children} = props
  return <BaseUl as="ul" {...props}>{children}</BaseUl>
}

interface LiProps extends BoxProps {
  children: React.ReactNode
}
export function Li({ children, ...rest }: LiProps) {
  return <BaseLi {...rest}>{children}</BaseLi>
}

Li.defaultProps = {
  as: 'li',
}



