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

const SelectSleepTime = props => {
  return (
    <SelectField minW={'100px'} {...props}>
      <option value={getTime(20, 0, true)}>20:00</option>
      <option value={getTime(20, 30, true)}>20:30</option>
      <option value={getTime(21, 0, true)}>21:00</option>
      <option value={getTime(21, 30, true)}>21:30</option>
      <option value={getTime(22, 0, true)}>22:00</option>
      <option value={getTime(22, 30, true)}>22:30</option>
      <option value={getTime(23, 0, true)}>23:00</option>
      <option value={getTime(23, 30, true)}>23:30</option>
      <option value={getTime(0, 0, false)}>00:00</option>
      <option value={getTime(0, 30, true)}>00:30</option>
      <option value={getTime(1, 0, true)}>01:00</option>
      <option value={getTime(1, 30, true)}>01:30</option>
      <option value={getTime(2, 0, true)}>02:00</option>
    </SelectField>
  )
}

export default SelectSleepTime
