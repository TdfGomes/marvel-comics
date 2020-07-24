import React from 'react'
import { render, screen } from '../../../test/test-utils'
import Characters from '../Characters'

jest.mock('../../../hooks', () => ({
  ...jest.requireActual('../../../hooks'),
  useCharacters: jest.fn().mockReturnValue({
    data: [    
      { name: 'Captain America', thumbnail:{path:'path/to/img' ,extension:'jpg'}},
      { name: 'Nick Fury', thumbnail:{path:'path/to/img' ,extension:'jpg'}},
      { name: 'S.H.I.E.L.D.', thumbnail:{path:'path/to/img' ,extension:'jpg'}},
      { name: 'Sharon Carter', thumbnail:{path:'path/to/img' ,extension:'jpg'}},
    ],
    isLoading: false,
  }),
}))

const characters = [
  { name: 'Captain America', resourceURI: 'path/to/public/characters/12345' },
  { name: 'Nick Fury', resourceURI: 'path/to/public/characters/3232' },
  { name: 'S.H.I.E.L.D.', resourceURI: 'path/to/public/characters/45324' },
  { name: 'Sharon Carter', resourceURI: 'path/to/public/characters/23453' },
]

test('Should display a creators list by role', () => {
  render(<Characters characters={characters} />, {})
  
  expect(screen.queryAllByLabelText(/character-name/i)).toHaveLength(4)
  expect(screen.queryAllByAltText(/character-image/i)).toHaveLength(4)
  
})