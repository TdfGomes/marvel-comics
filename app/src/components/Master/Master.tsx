import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import { useComics } from '../../hooks'
import { Comic, UseComics } from '../../hooks/Comic'

import {Ul, Li} from '../UI/Lists'
import Link from '../UI/Link'
import Button from '../UI/Button'
import Grid from '../UI/Grid'
import Loader from '../UI/Loader'

function Master(){
  const { data, isLoading, loadMore }: UseComics = useComics()
  const { url } = useRouteMatch();

  if (!data.length && isLoading) return <Loader big color="secondary"/>

  return (
    <>
      <Ul>
        {data.map(({ id, title }: Comic, idx) => (
          <Li
            paddingY={1}
            paddingX={5}
            key={`${idx}/${id}`}
          >
            <Link 
              fontSize={4}
              to={`${url}/${id}`}
            >{title}</Link>
          </Li>
        ))}
      </Ul>
      <Grid variant="container" justifyContent="center" marginY={2}>
        <Button isLoading={isLoading} onClick={() => loadMore()}>Load More</Button>
      </Grid>
    </>
  )
    
  
}

export default Master