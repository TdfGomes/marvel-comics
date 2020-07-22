import React from 'react' 
import Select, { SelectValueType, Option } from '../UI/Select'

interface UserActionsProps {
  sort: (value:SelectValueType) => void
}

const options: Option[] = [
  { label: 'A > Z', value: 'asc' },
  { label: 'Z > A', value: 'desc' },
]

function UserActions({sort}:UserActionsProps){
  
  const handleChange = (value: SelectValueType) => {
    sort(value)
  }
  
  return (
    <Select options={options} onChange={handleChange}/>
  )
}

export default UserActions