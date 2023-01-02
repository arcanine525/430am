import React from 'react'
import SelectField from './SelectField'

const getTime = (h, m, isPreviousDay) => {
  const date = new Date()
  if (isPreviousDay) {
    date.setDate(date.getDate() - 1)
  }
  date.setHours(h, m, 0, 0)
  return date.getTime()
}

const SelectUsageTime = props => {
  return (
    <SelectField minW={'100px'} {...props}>
      <option value={'<5'}>Ít hơn 5 tiếng</option>
      <option value={'5-7'}>Từ 5 - 7 tiếng</option>
      <option value={'7-10'}>Từ 7 - 10 tiếng</option>
      <option value={'>10'}>Trên 10 tiếng</option>
    </SelectField>
  )
}

export default SelectUsageTime
