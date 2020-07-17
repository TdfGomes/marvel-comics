import React from 'react'
import {useParams} from 'react-router-dom'
import {useComic} from '../../hooks'
import {Comic, UseComics} from '../../hooks/Comic'

function Detail(){
  const {id} = useParams()
  const {data,isLoading}:UseComics = useComic(id)
  
  if (isLoading) return <span>Is Loading....</span>
  
  const {title}:Comic = data[0]

  return (
    <h1>{title}</h1>
  )
}

export default Detail