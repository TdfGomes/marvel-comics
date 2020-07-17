import styled from "styled-components";
import {
  space,
  color,
  typography,
  border,
  shadow,
  layout,
  position,
  compose
} from "styled-system";

const css = compose(space, color, typography, border, shadow, layout, position)

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  css
)

Box.displayName = 'Box'

export default Box