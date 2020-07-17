import {useEffect, useState} from 'react'
import {API_URL} from '../utils/constants'

interface Price {
  price: number
  type: string
}

interface Image {
  extension: string
  path: string
}

interface URL {
  type: string
  url: string
}

interface Comic {
  id: number
  description: string
  title: string
  prices: Price[]
  images: Image[]
  urls: URL[]
}

interface ApiResponse{
  offset:number
  limit:number
  total:number
  results:Comic[]
}

type Res = ApiResponse | never[]

export function useComics(): Res{
  const [comics,setComics] = useState([])
  useEffect(() => {
    async function getComics() {
      const response = await fetch(`${API_URL}/comics`, { headers: { 'content-type': 'application/json' } })
      const data = await response.json()
      setComics(await data?.data)
    }
    getComics()
  }, [])
  return comics
}
