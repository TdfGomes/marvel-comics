import React, { useState, useEffect, useRef} from 'react'
import {useRouteMatch} from 'react-router-dom'
import { useComics } from '../../hooks'
import { Comic, UseComics, Character } from '../../hooks/Comic'
import UserActions from './UserActions'

import {Ul, Li} from '../UI/Lists'
import Link from '../UI/Link'
import Button from '../UI/Button'
import Grid from '../UI/Grid'
import Loader from '../UI/Loader'
import Select from '../UI/Select'

// import compose from '../../utils/compose'

interface ISortByTitle {
  [key: string]: (a: Comic, b: Comic) => number
}

const sortingOptions: ISortByTitle = Object.freeze({
  asc: (a,b) => a.title > b.title ? 1 : -1,
  desc: (a, b) => a.title < b.title ? 1 : -1,
})

function Master(){
  const { data, isLoading, loadMore }: UseComics = useComics()
  const { url } = useRouteMatch();
  const [sortAndFilterOptions, setSortAndFilter] = useState<string>('asc')
  

  // const filterByCharacter = (term: string) => (a: Comic) => {
    //   const charactersName = a.characters.items.map(({ name }: Character) => name)
    //   return charactersName.includes(term)
    // }
    // const filterComics = (term: string) => (arr: Comic[]) => arr.filter(filterByCharacter(term))
    // const sortAndFilter = compose(sortComics, filterComics('Captain America'))
  // const dataToRender = useRef<Comic[]>(data)
  // let dataToRender
  // console.log(dataToRender)
  // useEffect(() => {
  //   // setData(data.sort(sortingOptions[sortAndFilterOptions]))
  //   dataToRender.current = data.sort(sortingOptions[sortAndFilterOptions])
    
  //   console.log('FROM HOOK ==> ',sortAndFilterOptions)
    
  // }, [sortAndFilterOptions,data])
  
  function handleChange(opt: string){
    setSortAndFilter(opt)
  }

  const dataToRender = data.sort(sortingOptions[sortAndFilterOptions])

  return (
    <>
      <UserActions sort={handleChange}/>
      {(!dataToRender.length && isLoading) && <Loader big color="secondary" />}
      <Ul>
        {console.log(dataToRender[0]?.title)}
        {dataToRender.map(({ id, title }: Comic, idx) => (
          <Li
            paddingY={1}
            paddingX={5}
            key={`${idx}/${id}`}
          >
            <Link fontSize={4} to={`${url}/${id}`}>{title}</Link>
          </Li>
        ))}
      </Ul>
      {dataToRender.length > 0 && (
        <Grid variant="container" justifyContent="center" marginY={2}>
          <Button isLoading={isLoading} onClick={() => loadMore()}>Load More</Button>
        </Grid>
      )}
    </>
  )
    
  
}

export default Master