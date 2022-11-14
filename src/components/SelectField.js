import {FormControl, FormHelperText, Select} from '@chakra-ui/react'
import {useField} from 'formik'

const SelectField = props => {
  const {name, children, ...rest} = props || {}
  const [field, meta] = useField(props)

  const invalidTouched = !!meta.error

  return (
    <FormControl isInvalid={invalidTouched}>
      <Select id={name} {...rest} {...field}>
        {children}
      </Select>
      {invalidTouched && (
        <FormHelperText color={'red'} fontSize={'12px'}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default SelectField
