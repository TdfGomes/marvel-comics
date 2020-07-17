import 'whatwg-fetch'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants'
import { Comic, UseComics } from './Comic'

export function useComic(id:number): UseComics {
  const [isLoading, setLoading] = useState(true)
  const [comics, setComics] = useState<Comic[]>([])
  useEffect(() => {
    async function getComics() {
      const response = await fetch(`${API_URL}/comics/${id}`)
      const data = await response.json()
      setComics(await data.data.results)
      setLoading(false)
    }
    getComics()
  }, [id])
  return { isLoading, data: comics }
}
