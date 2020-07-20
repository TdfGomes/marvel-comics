import React from 'react'
import {useParams} from 'react-router-dom'
import {useComic} from '../../hooks'
import {Comic, UseComic} from '../../hooks/Comic'
import Loader from '../UI/Loader'
import { Title } from '../UI/Typoraphy'
import Grid from '../UI/Grid'
import Img from '../UI/Img'


function Detail(){
  const {id} = useParams()
  const {data,isLoading}:UseComic = useComic(id)
  
  if (isLoading) return <Loader big color="primary"/>
  
  const { title, thumbnail}:Comic = data[0]

  return (
    <Grid variant="container">
      <Grid width={[1, 3/12]}>
        <Img src={thumbnail.path} alt={title}/>
      </Grid>
      <Grid width={[1, 9/12]}>
        <Title>{title}</Title>
      </Grid>
    </Grid>
  )
}

export default Detail