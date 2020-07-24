import React from 'react'
import Select, { SelectValueType, Option } from '../UI/Select'
import Grid from '../UI/Grid'
import { Label } from '../UI/Typoraphy'

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
  { label: 'Captain America', value: 'Captain America' },
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
  { label: 'Red Skull', value: 'Red Skull' },
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
      as="form"
      role="form"
    >
      <Grid variant="item" width={0.35}>
        <Label htmlFor="sort">Ordering by title:</Label>
        <Select
          name="sort"
          options={sortOptions}
          onChange={handleSort}
          defaultValue={sortOptions[0]}
          aria-label="order-comics-list"
        />
      </Grid>
      <Grid variant="item" width={0.65}>
        <Label htmlFor="filter">Filter by your favourite characters:</Label>
        <Select
          name="filter"
          placeholder="Select characters"
          options={filterOptions}
          onChange={handleFilter}
          isMulti
          aria-label="filter-comics-list"
        />
      </Grid>
    </Grid>
  )
}

export default UserActions
