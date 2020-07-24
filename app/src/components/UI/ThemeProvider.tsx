import React, { createContext } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import theme from './theme'

function ThemeProvider(props: React.PropsWithChildren<{}>) {
  return <StyledProvider theme={theme}>{props.children}</StyledProvider>
}

export default ThemeProvider
