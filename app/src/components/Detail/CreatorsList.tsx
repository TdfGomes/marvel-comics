import React from 'react'
import {Creator} from '../../hooks/Comic'

interface CreatorsListProps {
  creators: Creator[]
}

interface Cr {
  roles: Creator[]
}


function CreactorsList({ creators }: CreatorsListProps){
  console.log('creators ==> ', creators)
  const creatorsByRole = creators.reduce((acc:any,curr) => {
    acc[curr.role] = creators.filter(creator => creator.role === curr.role)
    return acc
  },{})
  const roles = Object.keys(creatorsByRole)
  const cr = Object.values(creatorsByRole)
  console.log('roles', roles)
  
  console.log('creators', cr)
  return (
    <ul>
      {roles.map(role => (
        <li key={role}>
          <b>{role}</b>
          <div>{creatorsByRole[role].map(({name}:any) => name).join(', ')}</div>
        </li>)
      )}
    </ul>
  )
}

export default CreactorsList