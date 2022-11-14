import {Box, Flex, Heading, Image} from '@chakra-ui/react'
import React from 'react'
import {connect} from 'react-redux'
import {showModal} from '../store/actions/modal'
import Footer from '../components/Footer'
import MiniHeader from '../components/MiniHeader'
import tdsSx from '../theme/tdsSx'
import {fSizes} from '../theme/spacing'

const Guide = ({isAuthenticated, showModal}) => {
  return (
    <Box sx={tdsSx.fontSetting}>
      <MiniHeader />
      <Box
        minH={'1000px'}
        align={'center'}
        pt={['12px', '18px', '32px', '40px']}>
        <Box
          alignSelf={'center'}
          // maxW={['450px', '700px', '900px', '1100px']}
          py={'24px'}
          px={['4px', '12px']}
          mx={'24px'}>
          <Flex justify={'center'} alignItems={'center'}>
            <Image
              w={['300px', '543px']}
              h={['56px', '107px']}
              src={'img/img_challenge_tds_x_nuoiem.png'}
            />
          </Flex>
        </Box>
        <Heading mx={'24px'} mt={'60px'} fontSize={fSizes.b30}>
          Tính năng đang hoàn thiện, hẹn năm mới gặp lại bạn nhé! abbbbbb
        </Heading>
      </Box>
      <Footer />
    </Box>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(Guide)
