import NavBar from './NavBar'
import {Stack} from '@chakra-ui/react'
import React from 'react'

const MiniHeader = () => {
  return (
    <Stack>
      <Stack
        w={'full'}
        // h={['160px', '454px']}
        h={['100px', '350px']}
        backgroundImage={'img/img_header.png'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      />
      <Stack position={'absolute'} top={'-8px'} w={'full'}>
        <NavBar />
      </Stack>
    </Stack>
  )
}

export default MiniHeader
