import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import {useField} from 'formik'
import {CheckIcon} from '@chakra-ui/icons'

const InputField = props => {
  const {name, label, leftAddonElement, ...rest} = props || {}
  const [field, meta] = useField(props)

  const invalidTouchedInput = !!meta.error && !!meta.touched

  return (
    <FormControl isInvalid={invalidTouchedInput}>
      {!!label && (
        <FormLabel mb="1" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddonElement && <InputLeftElement children={leftAddonElement} />}
        <Input
          variant="flushed"
          fontSize={'14px'}
          id={name}
          {...rest}
          {...field}
        />
        {!!field.value && !meta.error && (
          <InputRightElement
            children={<CheckIcon color="green.500" w="12px" />}
          />
        )}
      </InputGroup>
      {invalidTouchedInput && (
        <FormHelperText color={'red'} fontSize={'12px'}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default InputField
