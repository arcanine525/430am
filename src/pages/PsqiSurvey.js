import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { showModal } from '../store/actions/modal'
import PsqiForm from '../components/forms/PsqinForm'
import MiniHeader from '../components/MiniHeader'
import Footer from '../components/Footer'
// import SignInForm from '../components/forms/SignInForm'
import tdsSx from '../theme/tdsSx'
import { fSizes } from '../theme/spacing'

const PsqiSurvey = ({ auth, showModal }) => {
  useEffect(() => {
    if (!auth.isAuthenticated && !auth.loading) {
      // showModal({BodyComponent: <SignInForm />})
    }
  }, [showModal, auth.isAuthenticated, auth.loading])

  return (
    <Box sx={tdsSx.fontSetting}>
      <MiniHeader />
      <Box
        bg={'white'}
        minH={'1000px'}
        align={'center'}
        pt={['48px']}
        px={['12px', '24px']}>
        <Heading fontSize={fSizes.b45}>
          {/* Chỉ số Chất lượng Giấc ngủ Pittsburgh (PSQI) */}
        </Heading>
        <Stack
          mt={'24px'}
          spacing={'12px'}
          textAlign={'left'}
          maxW={['600px', '760px', '980px', '1040px']}>
          <Text fontWeight={'700'} fontSize={fSizes.b30} style={{ 'color': '#873e23', 'textAlign': 'center'}}>
            DIGITAL DEMENTIA - HỘI CHỨNG MẤT TRÍ NHỚ KĨ THUẬT SỐ
          </Text>
          <Text fontWeight={'700'} fontSize={fSizes.b18} fontStyle='italic' justifyContent='center'>
            Trong thời đại 4.0, chúng ta không thể phủ nhận những tiện ích mà các thiết bị kĩ thuật số mang đến. Tuy nhiên, nếu quá lạm dụng và phụ thuộc, bạn có thể đánh mất khả năng ghi nhớ, tư duy và sáng tạo chủ động của chính mình! Nguy cơ tiềm tàng ấy chính là hội chứng Mất trí nhớ kĩ thuật số - Digital Dementia. Hãy sử dụng thiết bị kĩ thuật số một cách thông minh, để các thiết bị này trở thành người bạn đồng hành hữu ích chứ không phải thay thế hoàn toàn cho bản thân mình, bạn nhé!
          </Text>

          <Text fontWeight={'700'} fontSize={fSizes.b16} color={'#1e81b0'} textAlign='center'>
            Hãy thực hiện bài khảo sát dưới đây để tự đánh giá mức độ phụ thuộc vào thiết bị kĩ thuật số trong việc ghi nhớ, tư duy và sáng tạo nhé!
          </Text>
          <PsqiForm />

          <Text fontWeight={'700'} fontSize={fSizes.b18} style={{"text-align": 'center'}}>
            {/* Hãy lưu lại kết quả bài trắc nghiệm PSQI vừa rồi và tiếp tục thực hiện khảo sát với chúng mình <a href='https://forms.gle/KAv5zasu4yWauqq99' style={{color: 'red'}}>tại đây</a> nhé. */}
          </Text>
        </Stack>
      </Box>
      <Footer />
    </Box>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { showModal })(PsqiSurvey)
