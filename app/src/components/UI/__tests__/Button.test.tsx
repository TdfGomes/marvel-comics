import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

const props = {
  isLoading: false,
  children: 'Click me',
  onClick: jest.fn()
}
test('onClick should be called when user clicks', () => {

  render(<Button {...props}/>)

  userEvent.click(screen.queryByText(/click/i))
  
  expect(props.onClick).toBeCalled()
  expect(props.onClick).toBeCalledTimes(1)
})

test('loader should be visible', () => {

  render(<Button {...props} isLoading/>)
  
  expect(screen.queryByText(/click/i)).toBeNull()
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
})
