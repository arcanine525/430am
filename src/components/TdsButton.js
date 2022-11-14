import React from 'react'
import {Button} from '@chakra-ui/react'

const TdsButton = ({
  children,
  size,
  color,
  bg,
  borderColor,
  _hover,
  onClick,
  ...props
}) => {
  return (
    <Button
      size={size || 'md'}
      color={color || 'white'}
      bg={bg || 'black'}
      fontFamily={'Raleway'}
      borderColor={borderColor}
      _hover={
        _hover || {
          bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
        }
      }
      borderRadius={'33px'}
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  )
}

export default TdsButton
