import React from 'react'
import {Box, Heading, Image} from '@chakra-ui/react'
import {connect} from 'react-redux'

const SignUpSuccess = () => {
  return (
    <Box align={'center'} px={'60px'} py={'60px'}>
      <Image
        mb={'20px'}
        w={'120px'}
        h={'120px'}
        src={'img/img_sun_happy.png'}
      />
      <Heading maxW={'200px'} color={'green'} fontSize={'21px'}>
        Chúc mừng bạn đã đăng ký thành công
      </Heading>
    </Box>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(SignUpSuccess)
