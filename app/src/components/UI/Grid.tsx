import styled from 'styled-components'
import { flexbox, FlexProps, LayoutProps,ColorProps,  variant } from 'styled-system'
import Box from './Box'

type Variants = "container" | "item"

interface GridProps extends FlexProps, LayoutProps, ColorProps {
  variant?: Variants
}

const Grid = styled(Box)<GridProps>(
  flexbox,
  variant({
    variants: {
      container: {
        display: 'flex',
        minHeight: '100vh',
      },
      item: {
        marginRight:3
      },
    },
  })
)
  
export default Grid
