import React from 'react'
import { useComics } from '../../hooks'

function Master(){
  const comics = useComics()

  console.log(comics)
  return (
    <h1>Master</h1>
  )
}

export default Master