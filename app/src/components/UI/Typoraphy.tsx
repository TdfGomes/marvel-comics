import styled from 'styled-components'
import Box, {BoxProps} from './Box'

export const Title = styled(Box)<BoxProps>``

Title.defaultProps = {
  as:"h1",
  color:"text",
  fontSize:6,
  lineHeight: 4,
  marginTop: 2,
  marginBottom: 2
}

export const SectionTitle = styled(Box)<BoxProps>`
  text-transform: capitalize;
`

SectionTitle.defaultProps = {
  as:"h4",
  color:"text",
  fontSize:3,
  fontWeight:'bold',
  marginTop: 0,
  marginBottom:1
}

export const P = styled(Box)<BoxProps>``

P.defaultProps = {
  as:"p",
  color:"text",
  fontSize:2,
  fontWeight:'normal',
  marginTop:0,
  marginBottom:0
}