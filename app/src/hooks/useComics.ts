import 'whatwg-fetch'
import {useEffect, useState} from 'react'
import {API_URL} from '../utils/constants'
import {Comic, UseComics} from './Comic'

export function useComics(): UseComics{
  const [isLoading,setLoading] = useState(true)
  const [comics, setComics] = useState<Comic[]>([])
  useEffect(() => {
    async function getComics() {
      const response = await fetch(`${API_URL}/comics`)
      const data = await response.json()
      setComics(await data.data.results)
      setLoading(false)
    }
    getComics()
  }, [])
  return {isLoading,data:comics}
}
