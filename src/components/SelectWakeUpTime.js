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

const SelectWakeupTime = props => {
  return (
    <SelectField minW={'100px'} {...props}>
      <option value={getTime(3, 0)}>03:00</option>
      <option value={getTime(3, 30)}>03:30</option>
      <option value={getTime(4, 0)}>04:00</option>
      <option value={getTime(4, 30)}>04:30</option>
      <option value={getTime(5, 0)}>05:00</option>
      <option value={getTime(5, 30)}>05:30</option>
      <option value={getTime(6, 0)}>06:00</option>
      <option value={getTime(6, 30)}>06:30</option>
      <option value={getTime(7, 0)}>07:00</option>
      <option value={getTime(7, 30)}>07:30</option>
      <option value={getTime(8, 0)}>08:00</option>
      <option value={getTime(8, 30)}>08:30</option>
      <option value={getTime(9, 0)}>09:00</option>
      <option value={getTime(9, 30)}>09:30</option>
      <option value={getTime(10, 0)}>10:00</option>
      <option value={getTime(10, 30)}>10:30</option>
      <option value={getTime(11, 0)}>11:00</option>
      <option value={getTime(11, 30)}>11:30</option>
    </SelectField>
  )
}

export default SelectWakeupTime
