import React from 'react'
import RSelect, { ValueType, Props } from 'react-select'
import {
  colors,
  borderStyles,
  borderWidths,
  radii,
  space,
  fontSizes,
  lineHeights,
} from './theme'

const styles = {
  control: (provided: any) => ({
    ...provided,
    paddingTop: space[1],
    paddingBottom: space[1],
    fontSize: fontSizes[2],
    lineHeight: lineHeights[1],
    borderStyle: borderStyles['outline'],
    borderWidth: borderWidths[1],
    borderColor: colors['secondary'],
    backgroundColor: colors['transparent'],
    color: colors['text'],
    borderRadius: radii[0],
    outline: 'none',
    boxShadow: 'none',
    '&:hover': {
      borderColor: colors['text'],
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: 'none',
    borderRadius: radii[0],
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? colors['secondary']
      : state.isFocused
      ? colors['lemon']
      : colors['transparent'],
    '&:active': {
      backgroundColor: colors['orange'],
      color: colors['text'],
    },
    color: state.isSelected ? colors['text'] : colors['dark'],
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: colors['text'],
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: colors['text'],
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: colors['text'],
  }),
  indicatorSeparator: () => ({}),
}
export type SelectValueType = ValueType<Option | Option[]>
export interface Option {
  label: string
  value: string
}
interface SelectProps extends Props {
  onChange: (value: SelectValueType) => void
}

function Select({ onChange, ...rest }: SelectProps) {
  const handleChange = (value: SelectValueType) => {
    onChange(value)
  }
  
  return <RSelect {...rest} onChange={handleChange} styles={styles} />
}

export default Select
