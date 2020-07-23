import React from 'react'
import { useCharacters } from '../../hooks'
import { Character, UseCharacters } from '../../hooks/Comic'
import { SectionTitle, P } from '../UI/Typoraphy'

import Img from '../UI/Img'
import Loader from '../UI/Loader'
import Grid from '../UI/Grid'

interface CharactersProps {
  characters: Character[]
}

function Characters({ characters }: CharactersProps) {
  const { data, isLoading }: UseCharacters = useCharacters(characters)

  return (
    <>
      <SectionTitle marginTop={1} marginBottom={0} fontSize={4} lineHeight={6}>
        Characters:
      </SectionTitle>
      {isLoading && <Loader color="primary" />}
      {!isLoading && !data.length && (
        <P fontSize={2}>No Characters were found!</P>
      )}
      <Grid variant="container">
        {data.map(({ thumbnail: { path, extension }, name }, idx) => (
          <Grid variant="item" key={idx}>
            <P>{name}</P>
            <Img
              src={`${path}.${extension}`}
              alt="character image"
              height={'thumbnail'}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Characters
