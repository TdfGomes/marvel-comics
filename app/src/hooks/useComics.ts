import 'whatwg-fetch'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants'
import { Comic, UseComics } from './Comic'

export function useComics(): UseComics {
  const [isLoading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [comics, setComics] = useState<Comic[]>([])

  function loadMore() {
    setLoading(true)
    setOffset(20 + offset)
  }

  useEffect(() => {
    async function getComics() {
      const response = await fetch(`${API_URL}/comics?offset=${offset}`)
      const data = await response.json()

      setComics((prevComics) => [...prevComics, ...data.data.results])
      setLoading(false)
    }
    getComics()
  }, [offset])

  return { isLoading, data: comics, offset, loadMore }
}
