import styled from 'styled-components'
import Box, { BoxProps } from './Box'

interface StyledImgProps extends BoxProps {
  src: string
  alt: string
}

const Img = styled(Box)<StyledImgProps>`
  max-width: 100%;
`

Img.defaultProps = {
  padding: 2,
  as: 'img',
}

export default Img
