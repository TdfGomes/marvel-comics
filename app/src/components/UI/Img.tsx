import styled from 'styled-components'
import Box, {BoxProps} from './Box'

interface ImgProps extends BoxProps{
  src: string
  alt: string
}

const Img = styled(Box)<ImgProps>``

Img.defaultProps ={
  as: 'img'
}

export default Img