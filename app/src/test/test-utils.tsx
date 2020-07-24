import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'
import ThemeProvider from '../components/UI/ThemeProvider'

function render(ui:any, {  ...options } = {}) {
const Wrapper = (props: React.PropsWithChildren<{}>) => (
  <ThemeProvider>
    <MemoryRouter>
      {props.children}
    </MemoryRouter>
  </ThemeProvider>
)
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export { render }
