import React from 'react'
import Box from './Box'
import styled from 'styled-components'

const BaseUl = styled(Box)`
  padding:0;
  margin: ${({theme}) => `${theme.space[4]} 0 0;`}
  listStyle: 'none';
`

const BaseLi = styled(Box)``

export function Ul(props:React.PropsWithChildren<{}>) {
  const {children} = props
  return <BaseUl as="ul" {...props}>{children}</BaseUl>
}

export function Li(props:React.PropsWithChildren<{}>) {
  const {children} = props
  return <BaseLi {...props}>{children}</BaseLi>
}

Li.defaultProps = {
  as: 'li',
  paddingY: 1,
  paddingX: 5,
}



