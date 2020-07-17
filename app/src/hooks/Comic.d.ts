
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
export interface UseComics {
  isLoading: Boolean
  data: Comic[] 
}
// export interface ApiResponse {
//   offset: number
//   limit: number
//   total: number
//   results: Comic[]
// }