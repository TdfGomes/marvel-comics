import React, {createContext} from 'react'
import { ThemeProvider as StyledProvider } from "styled-components";
import theme from './theme'

export const ThemeContext = createContext(null)

export function ThemeProvider(props:React.PropsWithChildren<{}>) {
  return <StyledProvider theme={theme}>{props.children}</StyledProvider>
}
