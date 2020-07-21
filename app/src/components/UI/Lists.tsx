import React from 'react'
import Box, { BoxProps } from './Box'
import styled from 'styled-components'

interface ListProps extends BoxProps {
  children: React.ReactNode
}

const BaseUl = styled(Box)<BoxProps>`
  padding:0;
  list-style: none;
`

const BaseLi = styled(Box)<BoxProps>``

export function Ul({children, ...rest}:ListProps) {
  return <BaseUl {...rest}>{children}</BaseUl>
}

Ul.defaultProps = {
  as: 'ul',
}

export function Li({ children, ...rest }: ListProps) {
  return <BaseLi {...rest}>{children}</BaseLi>
}

Li.defaultProps = {
  as: 'li',
}



