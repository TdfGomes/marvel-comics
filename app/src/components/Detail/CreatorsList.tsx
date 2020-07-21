import React from 'react'
import {Creator} from '../../hooks/Comic'
import { Ul, Li } from '../UI/Lists'
import { SectionTitle, P } from '../UI/Typoraphy'

interface CreatorsListProps {
  creators: Creator[]
}

interface Acc {
  [key: string]: Creator[]
}


function CreactorsList({ creators }: CreatorsListProps){

  const creatorsByRole = creators.reduce((acc: Acc,curr) => {
    acc[curr.role] = creators.filter(creator => creator.role === curr.role)
    return acc
  },{})

  return (
    <>
    <SectionTitle
      marginTop={1}
      marginBottom={0}
      fontSize={4}
      lineHeight={6}
    >
      Creators:
    </SectionTitle>
    <Ul marginTop={0}>
      {Object.keys(creatorsByRole).map(role => (
        <Li key={role} color="text" marginBottom={4}>
        <SectionTitle>{role}</SectionTitle>
          <P>{creatorsByRole[role].map(({name}:any) => name).join(', ')}</P>
        </Li>)
      )}
    </Ul>
    </>
  )
}

export default CreactorsList