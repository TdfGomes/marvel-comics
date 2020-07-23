import { Comic } from '../hooks/Comic'

const compose = (...fns: any[]) => (arr: Comic[]) =>
  fns.reduceRight((y, f) => f(y), arr)

export default compose
