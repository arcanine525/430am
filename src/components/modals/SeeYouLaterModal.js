import React from 'react'
import {Box, Heading, Image} from '@chakra-ui/react'
import {connect} from 'react-redux'

const SignUpSuccess = () => {
  return (
    <Box align={'center'} px={'60px'} py={'60px'}>
      <Image mb={'20px'} w={'120px'} h={'120px'} src={'img/img_sun.png'} />
      <Heading maxW={'300px'} color={'green'} fontSize={'21px'}>
        Hẹn sớm gặp các bạn!
      </Heading>
      <Heading maxW={'300px'} color={'green'} fontSize={'21px'}>
        Vui lòng quay lại sau
      </Heading>
    </Box>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(SignUpSuccess)
