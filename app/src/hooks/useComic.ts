import 'whatwg-fetch'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants'
import { Comic, UseComic } from './Comic'

export function useComic(id:number): UseComic {
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
