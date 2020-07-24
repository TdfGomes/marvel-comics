import React from 'react'
import { Creator } from '../../hooks/Comic'
import { Ul, Li } from '../UI/Lists'
import { SectionTitle, P } from '../UI/Typoraphy'

export interface CreatorsListProps {
  creators: Creator[]
}

interface Acc {
  [key: string]: Creator[]
}

function CreactorsList({ creators }: CreatorsListProps) {
  const creatorsByRole = creators.reduce((acc: Acc, curr) => {
    acc[curr.role] = creators.filter((creator) => creator.role === curr.role)
    return acc
  }, {})

  return (
    <>
      <SectionTitle marginTop={1} marginBottom={0} fontSize={4} lineHeight={6}>
        Creators:
      </SectionTitle>
      {!creators.length && <P>No Creators were found!</P>}
      <Ul marginTop={0}>
        {Object.keys(creatorsByRole).map((role) => (
          <Li key={role} color="text" marginBottom={4} aria-label="creator=details-item">
            <SectionTitle aria-label="creator-role">{role}</SectionTitle>
            <P aria-label="creators-name">
              {creatorsByRole[role].map(({ name }: any) => name).sort().join(', ')}
            </P>
          </Li>
        ))}
      </Ul>
    </>
  )
}

export default CreactorsList
