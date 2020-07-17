import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import { useComics } from '../../hooks'
import { Comic, UseComics } from '../../hooks/Comic'

import {Ul, Li} from '../UI/Lists'
import Link from '../UI/Link'

function Master(){
  const { data, isLoading, loadMore }: UseComics = useComics()
  const { url } = useRouteMatch();

  if(isLoading) return <span>Is Loading....</span>

  return (
    <>
      <Ul>
        {data.map(({ id, title }: Comic, idx) => (
          <Li key={`${idx}/${id}`}>
            <Link to={`${url}/${id}`}>{title}</Link>)
          </Li>
        ))}
      </Ul>
      <button onClick={() => loadMore()}>Load More</button>
    </>
  )
    
  
}

export default Master