import 'whatwg-fetch'

import { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants'
import { Character, CharactersData, UseCharacters, ApiResponse } from './Comic'

export function useCharacters(characters: Character[]): UseCharacters {
  const [isLoading, setLoading] = useState(true)
  const [charactersImgs, setCharacter] = useState<CharactersData[]>([])

  useEffect(() => {
    const urlsToFetch = characters.map((character) =>
      character.resourceURI.split(/public/g).pop()
    )

    function getCharacters() {
      setCharacter([]) // clear state each time new characters array is presented

      Promise.all(
        urlsToFetch.map(async (url) => {
          const response = await fetch(`${API_URL}${url}`)
          const data: ApiResponse<Character> = await response.json()

          setCharacter((prevCharacters) => [
            ...prevCharacters,
            ...data.data.results.map((result: any) => ({
              thumbnail: result.thumbnail,
              name: result.name,
            })),
          ])
        })
      ).finally(() => {
        setLoading(false)
      })
    }

    getCharacters()
  }, [characters])

  return { isLoading, data: charactersImgs }
}
