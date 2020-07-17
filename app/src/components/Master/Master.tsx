import React from 'react'
import {Link,useRouteMatch} from 'react-router-dom'
import { useComics } from '../../hooks'
import { Comic, UseComics } from '../../hooks/Comic'

function Master(){
  const { data, isLoading, loadMore }: UseComics = useComics()
  const { url } = useRouteMatch();

  if(isLoading) return <span>Is Loading....</span>

  return (
    <>
    <ul>
      {data.map(({id,title}: Comic) => <li key={id}><Link to={`${url}/${id}`}>{title}</Link>)</li>)}
    </ul>
    <button onClick={() => loadMore()}>Load More</button>
    </>
  )
    
  
}

export default Master