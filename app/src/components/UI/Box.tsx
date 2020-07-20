import React from 'react'
import styled from "styled-components";
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  compose
} from "styled-system";

const css = compose(space, color, typography, border, shadow, layout, position)

export interface BoxProps extends SpaceProps,
ColorProps,
TypographyProps,
BorderProps,
ShadowProps,
LayoutProps,
PositionProps{
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  css
)

Box.defaultProps = {
  fontFamily: 'robotoCondensed',
}

Box.displayName = 'Box'

export default Box