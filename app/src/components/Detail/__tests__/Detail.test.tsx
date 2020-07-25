import React from 'react'
import { render, screen } from '../../../test/test-utils'
import Detail from '../Detail'

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ id: 234 }),
  }
})

jest.mock('../../../hooks', () => ({
  ...jest.requireActual('../../../hooks'),
  useComic: jest.fn().mockReturnValue({
    data: [
      {
        title: 'Super Comic #12452',
        thumbnail: {
          path: 'jpg',
          extension: 'path/to/image/foo',
        },
        creators: {
          items: [
            {
              name: 'James',
              role: 'editor',
            },
            {
              name: 'Steve',
              role: 'penciler',
            },
            {
              name: 'Tom',
              role: 'editor',
            },
            {
              name: 'Frank',
              role: 'colorist',
            },
            {
              name: 'Mark',
              role: 'letterer',
            },
            {
              name: 'Andy',
              role: 'colorist',
            },
          ],
        },
        characters: {
          items: [
            { name: 'Captain America', resourceURI: 'path/to/public/12345' },
            { name: 'Nick Fury', resourceURI: 'path/to/public/3232' },
            { name: 'S.H.I.E.L.D.', resourceURI: 'path/to/public/45324' },
            { name: 'Sharon Carter', resourceURI: 'path/to/public/23453' },
          ],
        },
      },
    ],
    isLoading: false,
  }),
}))

test('Should display the comic details',() => {
  render(<Detail/>)
  expect(screen.getByAltText(/super comic/i)).toBeInTheDocument()
  expect(screen.getByText(/super comic/i)).toBeInTheDocument()
  
})

test('Should display a creators list by role', () => {
  render(<Detail />)

  expect(screen.queryAllByLabelText(/creator=details-item/)).toHaveLength(4)
  expect(screen.getByText(/editor/i).nextSibling).toHaveTextContent(
    'James, Tom'
  )
  expect(screen.getByText(/penciler/i).nextSibling).toHaveTextContent('Steve')
  expect(screen.getByText(/colorist/i).nextSibling).toHaveTextContent(
    'Andy, Frank'
  )
  expect(screen.getByText(/letterer/i).nextSibling).toHaveTextContent('Mark')
})