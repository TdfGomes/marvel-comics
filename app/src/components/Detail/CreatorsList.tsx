import React from 'react'
import {Creator} from '../../hooks/Comic'
import { Ul, Li } from '../UI/Lists'

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
    <Ul>
      {Object.keys(creatorsByRole).map(role => (
        <Li key={role}>
          <b>{role}</b>
          <div>{creatorsByRole[role].map(({name}:any) => name).join(', ')}</div>
        </Li>)
      )}
    </Ul>
  )
}

export default CreactorsList