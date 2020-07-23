import { Comic, Character } from '../hooks/Comic'

interface ISortByTitle {
  [key: string]: (a: Comic, b: Comic) => number
}

export const sortingOptions: ISortByTitle = Object.freeze({
  asc: (a, b) => (a.title > b.title ? 1 : -1),
  desc: (a, b) => (a.title < b.title ? 1 : -1),
})

export const filterByCharacter = (terms: string[]) => (a: Comic) => {
  const charactersName = a.characters.items.map(({ name }: Character) => name)
  return charactersName.some((character) => terms.includes(character))
}
export const filterComics = (terms: string[]) => (arr: Comic[]) =>
  !terms.length ? arr : arr.filter(filterByCharacter(terms))

export const sortByTitle = (fn: any) => (arr: Comic[]) => (!fn ? arr : arr.sort(fn))



