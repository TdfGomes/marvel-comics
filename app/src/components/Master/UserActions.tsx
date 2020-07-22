import React from 'react' 
import Select from '../UI/Select'

interface UserActionsProps {
  sort: (s:string) => void
}

const options = [
  { label: 'A > Z', value: 'asc' },
  { label: 'Z > A', value: 'desc' }
]

function UserActions({sort}:UserActionsProps){
  
  const handleChange = (e:string) => {
    sort(e)
  }
  
  return (
    <Select options={options} onChange={handleChange}/>
  )
}

export default UserActions