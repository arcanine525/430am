import {FormControl, FormHelperText, RadioGroup, Stack} from '@chakra-ui/react'
import {useField, useFormikContext} from 'formik'
import {useState} from 'react'

const RadioGroupField = props => {
  const [value, setValue] = useState()

  const {name, children, ...rest} = props || {}
  const [field, meta] = useField(props)
  const {setFieldValue} = useFormikContext()

  const invalidTouched = !!meta.error

  const handleChange = value => {
    setFieldValue(name, value)
    console.log('new value: ', value)
    setValue(Number(value))
  }

  return (
    <FormControl isInvalid={invalidTouched}>
      <RadioGroup
        id={name}
        {...rest}
        {...field}
        onChange={handleChange}
        value={value}>
        <Stack spacing={'20px'} direction="row">
          {children}
        </Stack>
      </RadioGroup>
      {invalidTouched && (
        <FormHelperText color={'red'} fontSize={'12px'}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default RadioGroupField
