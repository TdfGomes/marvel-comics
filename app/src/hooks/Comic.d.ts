
export interface Price {
  price: number
  type: string
}

export interface Image {
  extension: string
  path: string
}

export interface URL {
  type: string
  url: string
}

export interface Comic {
  id: number
  description: string
  title: string
  prices: Price[]
  images: Image[]
  urls: URL[]
}
export interface UseComic {
  isLoading: Boolean
  data: Comic[] 
}
export interface UseComics extends UseComic {
  offset: number
  loadMore: Function
}
export interface ApiResponse {
  offset: number
  limit: number
  total: number
  results: Comic[]
}