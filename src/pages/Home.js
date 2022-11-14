import {AspectRatio, Box, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import {connect} from 'react-redux'
import TdsButton from '../components/TdsButton'
import SignUpForm from '../components/forms/SignUpForm'
import {showModal} from '../store/actions/modal'
import Rule from '../components/layout/Rule'
import Footer from '../components/Footer'
import HomeHeader from '../components/HomeHeader'
import tdsSx from '../theme/tdsSx'
import {fSizes} from '../theme/spacing'

const Home = ({isAuthenticated, showModal}) => {
  const onClickSignUp = () => {
    showModal({BodyComponent: <SignUpForm />})
  }

  const renderInfo = () => {
    return (
      <Flex mt={'20px'} direction={'column'} align={'center'}>
        <Heading color={'tdsRed'} fontSize={['21px', '45px']}>
          Cộng đồng 4:30AM
        </Heading>
        <Heading
          mt={['4px', '16px']}
          color={'tdsBlack'}
          fontSize={['14px', '30px']}>
          Ngủ đủ - Dậy sớm - Tạo thói quen tốt
        </Heading>
        <AspectRatio
          mt={['20px', '50px']}
          maxW={['90vw', '80vw']}
          w={['90vw', '700px']}
          h={['60vw', '470px']}
          ratio={560 / 375}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/xXWFNSFO4ZI"
            allowFullScreen
          />
        </AspectRatio>
        <Heading mt={['24px', '48px']} color={'tdsRed'} fontSize={fSizes.b30}>
          Hãy tham gia ngay!
        </Heading>
        {!isAuthenticated && (
          <TdsButton
            flex={'1'}
            onClick={onClickSignUp}
            minW={['130px', '176px']}
            minH={['40px', '55px']}
            fontSize={fSizes.b20}
            bg={'tdsRed'}
            mt={['12px', '48px']}
            mr={'18px'}>
            Đăng ký
          </TdsButton>
        )}
      </Flex>
    )
  }

  return (
    <Box sx={tdsSx.fontSetting}>
      <HomeHeader />
      <Rule />
      {renderInfo()}
      <Footer mt={['-600px', '-380px']} />
    </Box>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(Home)
