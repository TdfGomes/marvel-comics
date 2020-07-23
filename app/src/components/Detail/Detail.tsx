import React from 'react'
import { useParams } from 'react-router-dom'
import { useComic } from '../../hooks'
import { Comic, UseComic } from '../../hooks/Comic'

import CreatorsList from './CreatorsList'
import Characters from './Characters'

import Loader from '../UI/Loader'
import { Title } from '../UI/Typoraphy'
import Grid from '../UI/Grid'
import Img from '../UI/Img'

function Detail() {
  const { id } = useParams()
  const { data, isLoading }: UseComic = useComic(id)

  if (isLoading) return <Loader big color="primary" />

  const { title, thumbnail, creators, characters }: Comic = data[0]

  return (
    <Grid variant="container" as="section">
      <Grid width={[1, 3 / 12]}>
        <Img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      </Grid>
      <Grid width={[1, 9 / 12]}>
        <Title marginBottom={6}>{title}</Title>
        <Characters characters={characters.items} />
        <CreatorsList creators={creators.items} />
      </Grid>
    </Grid>
  )
}

export default Detail
