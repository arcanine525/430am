import {Flex, Heading, Image, Stack, Text} from '@chakra-ui/react'
import NavBar from './NavBar'
import TdsButton from './TdsButton'
import React from 'react'
import {connect} from 'react-redux'
import {showModal} from '../store/actions/modal'
import SignUpForm from './forms/SignUpForm'
import tdsSx from '../theme/tdsSx'
import BtnHomeCheckin from './BtnHomeCheckin'

const HomeHeader = ({isAuthenticated, showModal}) => {
  const onClickSignUp = () => {
    showModal({BodyComponent: <SignUpForm />})
  }

  const renderContent = () => {
    return (
      <Flex
        pt={['140px', '240px']}
        px={'12px'}
        direction={'column'}
        align={'center'}
        pr={['12px', '10vw', '20vw', '30vw']}>
        <Flex alignItems={'center'}>
          <Image
            w={['300px', '543px']}
            h={['56px', '107px']}
            src={'img/img_challenge_tds_x_nuoiem.png'}
          />
        </Flex>
        <Flex
          w={['256px', '414px']}
          h={['43px', '70px']}
          mt={['18px']}
          justify={'center'}
          align={'center'}
          borderRadius={['20px', '32px']}
          borderColor={'white'}
          borderWidth={['1px', '2px']}
          sx={{
            background:
              'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
          }}>
          <Text
            fontSize={['22px', '36px']}
            fontWeight={'bold'}
            color={'tdsRed'}
            sx={{
              ...tdsSx.fontSetting,
              // ...tdsSx.textShadow,
            }}>
            Từ 3.1 - 30.1.2022
          </Text>
        </Flex>
        <Heading
          mt={['30px', '30px']}
          maxW={['80vw', '790px']}
          textAlign={'center'}
          color={'black'}
          fontSize={['14px', '24px']}>
          Hãy khởi động một năm mới thật ý nghĩa với việc tập luyện thói quen
          dậy sớm và đem lại bữa ăn đầy đủ cho các em nhỏ vùng cao cùng Thử
          thách 28 ngày Tôi Dậy Sớm x Nuôi Em.
        </Heading>
        <Stack
          display={['none', 'block']}
          spacing={['16px']}
          direction={'row'}
          pt={['40px']}>
          {!isAuthenticated && (
            <TdsButton
              flex={'1'}
              onClick={onClickSignUp}
              fontSize={['13px', '20px']}
              minW={['124px', '200px']}
              minH={['34px', '56px']}
              bg={'tdsRed'}
              mr={'18px'}>
              Đăng ký ngay
            </TdsButton>
          )}
          <BtnHomeCheckin />
        </Stack>
        <Stack
          display={['block', 'none']}
          spacing={['16px']}
          direction={'row'}
          pt={['20px']}>
          <BtnHomeCheckin />
        </Stack>
      </Flex>
    )
  }

  return (
    <Stack
      w={'full'}
      h={'100vh'}
      backgroundImage={{
        base: 'img/img_banner_mobile.png',
        sm: 'img/img_banner.png',
      }}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Stack position={'absolute'} top={0} w={'full'}>
        <NavBar />
      </Stack>
      {renderContent()}
    </Stack>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(HomeHeader)
