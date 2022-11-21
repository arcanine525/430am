import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { showModal } from '../store/actions/modal'
import PsqiForm from '../components/forms/PsqinForm'
import MiniHeader from '../components/MiniHeader'
import Footer from '../components/Footer'
import SignInForm from '../components/forms/SignInForm'
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
          <Text fontWeight={'700'} fontSize={fSizes.b18} style={{ 'color': '#873e23' }}>
            Bạn biết không, giấc ngủ có ảnh hưởng rất lớn đến sức khỏe và chất lượng cuộc sống của chúng ta! Nhưng với nhịp sống vội vã hiện nay, cộng với nhiều lý do cá nhân khác, có lẽ không phải ai cũng có được một giấc ngủ ngon lành và khỏe mạnh.
          </Text>
          <Text fontWeight={'700'} fontSize={fSizes.b18}>
            Bạn thì sao?
            Giấc ngủ của bạn có thật sự "chất lượng”?
          </Text>

          <Text fontWeight={'700'} fontSize={fSizes.b18}>
            Hãy thực hiện bài trắc nghiệm đánh giá rối loạn giấc ngủ Pittsburgh (PSQI) dưới đây để hiểu thêm về tình trạng giấc ngủ của mình nhé!
          </Text>

          <Text fontWeight={'700'} fontSize={fSizes.b18} fontStyle='italic'>
            Chúng mình là Như Ý và Bảo Hân, học sinh trường THPT Lương Thế Vinh, quận 1, đang thực hiện dự án "Khảo sát thực trạng và đề xuất giải pháp nâng cao chất lượng giấc ngủ của học sinh THPT tại TP.HCM”. Rất mong sau khi thực hiện bài test Pittsburgh (PSQI) này, các bạn sẽ ghi lại kết quả và tiếp tục thực hiện khảo sát của chúng mình nhé!
          </Text>

          <Text fontWeight={'700'} fontSize={fSizes.b18} fontStyle='italic'>
            Xin cảm ơn, và chúc bạn những giấc ngủ thật ngon lành, khỏe mạnh!
          </Text>

          {/* <Box py={['16px', '36px']}>
            <Box
              bg={'tdsBgGray'}
              borderRadius={['8px']}
              px={['30px', '60px']}
              py={['12px', '18px']}>
              <Text pt={'24px'} color={'#063970'} as={'b'} fontSize={fSizes.b18}>
                Hướng dẫn:{' '}
              </Text>
              <Text fontSize={fSizes.b16}>
                PSQI là thang điểm đánh giá chất lượng giấc ngủ trong 1 tháng
                vừa qua. Bạn hãy chọn các đáp án đúng với nhiều ngày nhất.
              </Text>
            </Box>
          </Box> */}
          <Text fontWeight={'700'} fontSize={fSizes.b18} color={'#1e81b0'}>
            Trong tháng qua:
          </Text>
          <PsqiForm />

          <Text fontWeight={'700'} fontSize={fSizes.b18} style={{"text-align": 'center'}}>
            Hãy lưu lại kết quả bài trắc nghiệm PSQI vừa rồi và tiếp tục thực hiện khảo sát với chúng mình tại đây nhé.
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
