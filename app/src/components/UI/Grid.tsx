import styled from 'styled-components'
import { flexbox, FlexProps, variant } from 'styled-system'
import Box, { BoxProps } from './Box'

type Variants = 'container' | 'item'
type JustifyContent =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end'
type AlignContent = 'center' | 'flex-start' | 'flex-end'

interface GridProps extends FlexProps, BoxProps {
  alignContent?: AlignContent
  justifyContent?: JustifyContent
  variant?: Variants
}

const Grid = styled(Box)<GridProps>(
  flexbox,
  variant({
    variants: {
      container: {
        display: 'flex',
      },
      item: {
        padding: 2,
      },
    },
  })
)

export default Grid
