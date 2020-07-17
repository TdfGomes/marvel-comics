import React from 'react'
import {useParams} from 'react-router-dom'
import {useComic} from '../../hooks'
import {Comic, UseComic} from '../../hooks/Comic'

function Detail(){
  const {id} = useParams()
  const {data,isLoading}:UseComic = useComic(id)
  
  if (isLoading) return <span>Is Loading....</span>
  
  const {title}:Comic = data[0]

  return (
    <h1>{title}</h1>
  )
}

export default Detail