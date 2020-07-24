import React from 'react'
import { render, screen, fireEvent } from '../../../test/test-utils'
import Master from '../Master'

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: jest.fn().mockReturnValue({url:'loacalhost/comics'}),
  }
})

jest.mock('../../../hooks/', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    useComics: jest.fn().mockReturnValue({
      data: [
        {
          id: 1,
          title: 'b comic1',
          characters: { items: [{ name: 'Captain America' }] },
        },
        {
          id: 2,
          title: 'c comic3',
          characters: { items: [{ name: 'Crossbones' }] },
        },
        {
          id: 3,
          title: 'a comic2',
          characters: { items: [{ name: 'Sharon Carter' }] },
        },
      ],
      isLoadging: false,
      loadMore: jest.fn(),
    }),
  }
} )

test('Should display comics in a list in ascending order by default', () => {
  render(<Master/>,{})
  
  const comicList = screen.queryAllByLabelText(/comic-item/i)
  expect(comicList).toHaveLength(3)
  expect(comicList[0]).toHaveTextContent(/a comic/i)

})

test('Should sort and filter the comic list', async () => {
  const {container} = render(<Master/>,{})
  
  const sort = screen.getByLabelText(/order-comics-list/i)
  const filter = screen.getByLabelText(/filter-comics-list/i)

  
  expect(screen.queryAllByLabelText(/comic-item/i)).toHaveLength(3)
  expect(screen.queryAllByLabelText(/comic-item/i)[0]).toHaveTextContent(/a comic/i)

  await fireEvent.change(sort, {target:{value:'Z'}})
  await fireEvent.click(container.querySelector('#react-select-4-option-1'))
  
  expect(screen.queryAllByLabelText(/comic-item/i)[0]).toHaveTextContent(
    /c comic/i
    )
    
  await fireEvent.change(filter, { target: { value: 'c' } })
  await fireEvent.click(container.querySelector('#react-select-5-option-2'))
  
  expect(screen.queryAllByLabelText(/comic-item/i)[0]).toHaveTextContent(/b comic/i)
  
  await fireEvent.change(filter, { target: { value: 's' } })
  await fireEvent.click(container.querySelector('#react-select-5-option-3'))
  
  expect(screen.queryAllByLabelText(/comic-item/i)).toHaveLength(2)

})