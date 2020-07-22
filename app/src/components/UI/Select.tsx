import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Box, { BoxProps } from './Box'


const StyledSelect = styled(Box)<BoxProps>({
  outline:"none"
})

interface SelectProps {
  options: {label:string,value:string}[]
  onChange: (value:string) => void
}

function Select({options,onChange, ...rest}:SelectProps){
  const [state, setState] = useState('')
  const onChangeMemo = useCallback(onChange,[])

  useEffect(() => {
    onChangeMemo(state)
  }, [state, onChangeMemo])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setState(e.target.value)
  }

  return (
    <StyledSelect {...rest}
      onChange={handleChange}
      as="select"
      width="small"
      paddingY={1}
      paddingX={2}
      fontSize={2}
      lineHeight={1}
      borderStyle='outline'
      borderWidth={1}
      borderColor="secondary"
      backgroundColor="transparent"
      color="text"
      borderRadius={0}
    >
      {options.map(({label,value}) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </StyledSelect>
  )
}

export default Select

