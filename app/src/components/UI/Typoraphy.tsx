import styled from 'styled-components'
import Box, {BoxProps} from './Box'

export const Title = styled(Box)<BoxProps>``

Title.defaultProps = {
  as:"h1",
  color:"text"
}