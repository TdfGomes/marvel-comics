import React from 'react'
import Select, { SelectValueType, Option } from '../UI/Select'
import Grid from '../UI/Grid'
import { P } from '../UI/Typoraphy'

interface UserActionsProps {
  sort?: (value: SelectValueType) => void
  filter?: (value: string[]) => void
}

const sortOptions: Option[] = [
  { label: 'A > Z', value: 'asc' },
  { label: 'Z > A', value: 'desc' },
]
const filterOptions: Option[] = [
  { label: 'X-Men', value: 'X-Men' },
  { label: 'Winter Soldier', value: 'Winter Soldier' },
  { label: 'Captain America', value: 'Red Skull' },
  { label: 'Sharon Carter', value: 'Sharon Carter' },
  { label: 'Crossbones', value: 'Crossbones' },
  { label: 'Sin', value: 'Sin' },
  { label: 'Hulk', value: 'Hulk' },
  { label: 'Spider-Man', value: 'Spider-Man' },
  { label: 'Colossus', value: 'Colossus' },
  { label: 'Kitty Pryde', value: 'Kitty Pryde' },
  { label: 'Beast', value: 'Beast' },
  { label: 'Cyclops', value: 'Cyclops' },
  { label: 'Wolverine', value: 'Wolverine' },
  { label: 'Wolverine', value: 'Wolverine' },
  { label: 'Emma Frost', value: 'Emma Frost' },
  { label: 'Iron Man', value: 'Iron Man' },
]

function UserActions({ sort, filter }: UserActionsProps) {
  const handleSort = (value: any) => {
    if (sort) {
      sort(value.value)
    }
  }
  const handleFilter = (values: any) => {
    if (filter) {
      const charatersName = values.map(({ value }: any) => value)
      filter(charatersName)
    }
  }

  return (
    <Grid
      variant="container"
      paddingBottom={2}
      borderBottom="1px dotted"
      borderBottomColor="secondary"
    >
      <Grid variant="item" width={0.35}>
        <P marginBottom={1}>Ordering by title:</P>
        <Select
          options={sortOptions}
          onChange={handleSort}
          defaultValue={sortOptions[0]}
        />
      </Grid>
      <Grid variant="item" width={0.65}>
        <P marginBottom={1}>Filter by your favourite characters:</P>
        <Select
          placeholder="Select characters"
          options={filterOptions}
          onChange={handleFilter}
          isMulti
        />
      </Grid>
    </Grid>
  )
}

export default UserActions
