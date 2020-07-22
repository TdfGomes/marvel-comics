
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

export interface Creator {
  name: string,
  role: string
}

export interface CreatorsList {
  items: Creator[]
}

export interface Character {
  name: string,
  resourceURI: string
}

export interface CharactersList {
  items: Character[]
}

export interface Comic {
  id: number
  description: string
  title: string
  prices: Price[]
  images: Image[]
  thumbnail: Image
  urls: URL[],
  creators: CreatorsList
  characters: CharactersList
}
export interface UseComic {
  isLoading: Boolean
  data: Comic[] 
}
export interface UseComics extends UseComic {
  offset: number
  loadMore: () => void
}

export interface CharactersData{
  thumbnail: Image
  name: string,
}
export interface UseCharacters {
  data: CharactersData[],
  isLoading: Boolean
}
export interface ApiResponse<T> {
  data: {
    offset: number
    limit: number
    total: number
    results: T[]
  }
}