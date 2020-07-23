import React from 'react'
import { Link as RRLink } from 'react-router-dom'
import Box from './Box'
import styled from 'styled-components'

const GenericLink = ({
  to,
  children,
  ...rest
}: {
  to: string
  children: React.ReactNode
}) =>
  to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <RRLink to={to} {...rest}>
      {children}
    </RRLink>
  )

const StyledLink = styled(Box)({
  textDecoration: 'none',
})

const Link = (props: any) => <StyledLink {...props} />

Link.defaultProps = {
  color: 'white',
  as: GenericLink,
}

export default Link
