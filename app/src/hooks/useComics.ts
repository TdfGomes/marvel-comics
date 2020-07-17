import 'whatwg-fetch'
import {useEffect, useState} from 'react'
import {API_URL} from '../utils/constants'
import {Comic, UseComics} from './Comic'

export function useComics(): UseComics{
  const [isLoading,setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [comics, setComics] = useState<Comic[]>([])
  
  useEffect(() => {
    async function getComics() {
      const response = await fetch(`${API_URL}/comics?offset=${offset}`)
      const data = await response.json()
      
      setComics(await data.data.results)
      setLoading(false)
    }
    getComics()
  }, [offset])

  function loadMore(){
    setOffset(21)
  }
  
  return { isLoading, data: comics, offset, loadMore }
}
