import React, {useState} from 'react'
import {
  Box,
  chakra,
  Flex,
  Radio,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import {connect} from 'react-redux'
import {Form, Formik} from 'formik'

import {psqiSchema} from '../../lib/FormScheme'

import TdsButton from '../TdsButton'
import {hideModal, showModal} from '../../store/actions/modal'
import SelectUsageTime from '../SelectUsageTime'

import RadioGroupField from '../RadioGroupField'
import {calculatePsqi} from '../../utils/psqi'
// import SelectField from '../SelectField'
import {submitPsqi} from '../../store/actions/psqi'
import {fSizes} from '../../theme/spacing'

const PsqiForm = ({showModal, hideModal, auth, submitPsqi}) => {
  const [result, setResult] = useState()

  const questionMinW = ['200px', '300px', '400px', '600px']
  const maxWidthRadio = ['90vw', '250px']
  const minWidthRadio = [180]

  const labelSize = ['16px', '20px']
  const quesSize = ['14px', '16px']
  const ansSize = ['14px', '16px']

  const handleSubmit = async values => {
    const {
      q1,
      q5a,
      q5b,
      q5c,
      q5d,
      q5e,
      q5f,
      q5g,
      q5h,
      q5i,
    } = values || {}
    const answer = {
      q1: String(q1),
      q5a: Number(q5a),
      q5b: Number(q5b),
      q5c: Number(q5c),
      q5d: Number(q5d),
      q5e: Number(q5e),
      q5f: Number(q5f),
      q5g: Number(q5g),
      q5h: Number(q5h),
      q5i: Number(q5i),
    }
    console.log('answer: ', answer)
    const result = await calculatePsqi(answer)
    if (auth?.user?.email) {
      submitPsqi({email: auth.user.email, answer, point: result?.point})
    }
    console.log('\x1b[36m', '🐣️ result |  | : ', result, '\x1b[0m')
    setResult(result)
  }

  const renderResult = () => {
    const {resultQ1, resultQ2, color} = result || {}
    return (
      <Box px={'12px'} mt={[20, 120]} align={'justify'} fontSize={[16, 18]}>
        <Text as={'i'} mt={'12px'}>
          Kết quả của bạn: {' '} <br/>
          <chakra.span fontWeight={'700'}>
            {resultQ1}
          </chakra.span>{' '} <br/>
          <chakra.span fontWeight={'700'}>
            {resultQ2}
          </chakra.span>{' '}
        </Text>
        {/* <Text as={'i'} fontWeight={'700'} mt={'12px'}>
          {resultQ1}
        </Text>

        <Text as={'i'} fontWeight={'700'} mt={'12px'}>
          {resultQ2}
        </Text> */}
      </Box>
    )
  }

  const radioQuestion = (
    id,
    label,
    question,
    c1 = 'Không bao giờ',
    c2 = 'Thỉnh thoảng',
    c3 = 'Thường xuyên',
    c4 = 'Luôn luôn',
  ) => {
    return (
      <Wrap>
        <WrapItem minW={questionMinW}>
          <Text pr={'12px'} fontSize={quesSize} fontWeight={'700'}>
            <chakra.span fontSize={labelSize} color={'#1e81b0'}>
              {label}{' '}
            </chakra.span>
            {question}
          </Text>
        </WrapItem>
        <WrapItem pl={'24px'}>
          <RadioGroupField pt={'5px'} alignSelf={'center'} name={id}>
            <Wrap>
              <WrapItem>
                <Radio
                  fontSize={ansSize}
                  colorScheme={'blue'}
                  minW={minWidthRadio}
                  maxW={maxWidthRadio}
                  value={0}>
                  {c1}
                </Radio>
              </WrapItem>
              <WrapItem>
                <Radio
                  fontSize={ansSize}
                  colorScheme={'blue'}
                  minW={minWidthRadio}
                  maxW={maxWidthRadio}
                  value={1}>
                  {c2}
                </Radio>
              </WrapItem>
              <WrapItem>
                <Radio
                  fontSize={ansSize}
                  colorScheme={'blue'}
                  minW={minWidthRadio}
                  maxW={maxWidthRadio}
                  value={2}>
                  {c3}
                </Radio>
              </WrapItem>
              <WrapItem>
                <Radio
                  fontSize={ansSize}
                  colorScheme={'blue'}
                  minW={minWidthRadio}
                  maxW={maxWidthRadio}
                  value={3}>
                  {c4}
                </Radio>
              </WrapItem>
            </Wrap>
          </RadioGroupField>
        </WrapItem>
      </Wrap>
    )
  }

  return (
    <Box spacing={'12px'} paddingTop='48px'>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={psqiSchema}>
        {({isSubmitting, isValid}) => (
          <Form>
            <Stack spacing={'24px'}>
              <Wrap>
                <WrapItem minW={questionMinW}>
                  <Text fontWeight={'700'} fontSize={quesSize} pr={'12px'}>
                    <chakra.span fontSize={labelSize} color={'#1e81b0'}>
                      Câu 1:{' '}
                    </chakra.span>
                    Thời gian sử dụng điện thoại của bạn trong một ngày trung bình khoảng bao nhiêu giờ?
                  </Text>
                </WrapItem>
                <WrapItem>
                  <SelectUsageTime
                    bg={'tdsBgSelect'}
                    ml={'24px'}
                    minW={'150px'}
                    fontSize={ansSize}
                    placeholder={'Thời gian sử dụng'}
                    name={'q1'}
                  />
                </WrapItem>
              </Wrap>

              <Box>
                <Text fontWeight={'700'} fontSize={quesSize} pr={'12px'}>
                  <chakra.span fontSize={labelSize} color={'#1e81b0'}>
                    Câu 2:{' '}
                  </chakra.span>
                  Hãy đánh giá về thói quen sử dụng thiết bị kĩ thuật số của bạn dựa vào mức độ thường xuyên xuất hiện của các hành vi sau:
                </Text>
                <Stack
                  mt={['18px', '18px', '20px']}
                  ml={['20px', '40px', '60px']}
                  spacing={'24px'}>
                  {radioQuestion(
                    'q5a',
                    'a.',
                    'Dựa vào các thiết bị kĩ thuật số để lưu giữ thông tin và chỉ xem lại khi cần, thay vì quan sát và ghi nhớ'
                  )}
                  {radioQuestion(
                    'q5b',
                    'b.',
                    'Dựa vào các thiết bị kĩ thuật số để lưu trữ và ghi nhớ thông tin cá nhân'
                  )}
                  {radioQuestion(
                    'q5c',
                    'c.',
                    'Dựa vào các thiết bị kĩ thuật số để lưu trữ và ghi nhớ các nội dung học tập/công việc'
                  )}
                  {radioQuestion(
                    'q5d',
                    'd.',
                    'Dựa vào các thiết bị kĩ thuật số để lưu trữ và ghi nhớ các dự định, kế hoạch, thời gian biểu'
                  )}
                  {radioQuestion(
                    'q5e',
                    'e.',
                    'Dựa vào các thiết bị kĩ thuật số để lưu trữ và ghi nhớ các thông tin về người thân, bạn bè'
                  )}
                  {radioQuestion(
                    'q5f',
                    'f.',
                    'Dựa vào các thiết bị kĩ thuật số để biết cách liên lạc với mọi người'
                  )}
                  {radioQuestion(
                    'q5g',
                    'g.',
                    'Dựa vào các thiết bị kĩ thuật số để tìm kiếm thông tin thay vì huy động kiến thức nền có sẵn để suy luận'
                  )}
                  {radioQuestion(
                    'q5h',
                    'h.',
                    'Dựa vào thiết bị kĩ thuật số để tìm ra phương án giải quyết vấn đề thay vì tự suy luận'
                  )}
                  {radioQuestion(
                    'q5i',
                    'i.',
                    'Dựa vào thiết bị kĩ thuật số để tìm ý tưởng thay vì quan sát thực tế và phát huy sự sáng tạo cá nhân'
                  )}
                </Stack>
              </Box>
            </Stack>

            {!result ? (
              <Box align={'center'}>
                <TdsButton
                  marginTop={'48px'}
                  type="submit"
                  minW={['130px', '220px']}
                  minH={['40px', '55px']}
                  fontSize={fSizes.b20}
                  bg={'tdsRed'}
                  isLoading={isSubmitting}>
                  Kết quả đánh giá
                </TdsButton>
                {!isValid && (
                  <Text fontSize={'14px'} p={'8px'} color={'#1e81b0'}>
                    Vui lòng hoàn thành tất cả câu hỏi
                  </Text>
                )}
              </Box>
            ) : (
              renderResult()
            )}
          </Form>
        )}
      </Formik>
    </Box>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {showModal, hideModal, submitPsqi})(
  PsqiForm
)
