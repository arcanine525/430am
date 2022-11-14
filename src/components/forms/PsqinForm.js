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
import SelectSleepTime from '../SelectSleepTime'
import RadioGroupField from '../RadioGroupField'
import {calculatePsqi} from '../../utils/psqi'
import SelectWakeUpTime from '../SelectWakeUpTime'
import SelectField from '../SelectField'
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
      q2,
      q3,
      q4,
      q5a,
      q5b,
      q5c,
      q5d,
      q5e,
      q5f,
      q5g,
      q5h,
      q5i,
      q5j,
      q6,
      q7,
      q8,
      q9,
    } = values || {}
    const answer = {
      q1: Number(q1),
      q2: Number(q2),
      q3: Number(q3),
      q4: Number(q4),
      q5a: Number(q5a),
      q5b: Number(q5b),
      q5c: Number(q5c),
      q5d: Number(q5d),
      q5e: Number(q5e),
      q5f: Number(q5f),
      q5g: Number(q5g),
      q5h: Number(q5h),
      q5i: Number(q5i),
      q5j: Number(q5j),
      q6: Number(q6),
      q7: Number(q7),
      q8: Number(q8),
      q9: Number(q9),
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
    const {tp, message, point, color} = result || {}
    return (
      <Box px={'12px'} mt={[20, 120]} align={'justify'} fontSize={[16, 18]}>
        <Text as={'i'} mt={'12px'}>
          Điểm PSQI - Pittsburgh Sleep Quality Index khảo sát 7 thành phần của
          giấc ngủ.{' '}
          <chakra.span fontWeight={'700'}>
            Thang điểm PSQI có kết quả từ 0 – 21 điểm với 0 là chất lượng giấc
            ngủ tốt và 21 là chất lượng giấc ngủ cực kỳ kém.
          </chakra.span>{' '}
          Một người bình thường với giấc ngủ tốt sẽ có điểm PSQI {'<'} 5.
        </Text>
        <Box mt={['12px', '24px']}>
          <Text as={'i'} fontWeight={'700'} mt={'12px'}>
            Điểm chất lượng giấc ngủ của bạn:{' '}
            <chakra.span color={color}>{point}/21</chakra.span>
          </Text>
        </Box>
        <Text as={'i'} fontWeight={'700'} mt={'12px'}>
          {message}
        </Text>
        <Flex>
          <Flex
            minW={['200px', '300px']}
            mt={['12px', '24px']}
            direction={'column'}
            alignItems={'flex-start'}
            justify={'flex-start'}>
            <Text as={'i'} mb={'4px'}>
              Điểm thành phần cụ thể{' '}
              <chakra.span fontWeight={'700'}>
                (Thang điểm từ 0 - 3 với 0 là rất tốt và 3 là rất tệ)
              </chakra.span>
            </Text>
            <Text as={'i'}>• Chất lượng giấc ngủ chủ quan: {tp.tp1}</Text>
            <Text as={'i'}>• Độ trễ giấc ngủ: {tp.tp2}</Text>
            <Text as={'i'}>• Thời gian ngủ: {tp.tp3}</Text>
            <Text as={'i'}>• Thói quen ngủ hiệu quả: {tp.tp4}</Text>
            <Text as={'i'}>• Các rối loạn khi ngủ: {tp.tp5}</Text>
            <Text as={'i'}>• Sử dụng thuốc ngủ: {tp.tp6}</Text>
            <Text as={'i'}>• Chất lượng làm việc ban ngày: {tp.tp7}</Text>
          </Flex>
        </Flex>
      </Box>
    )
  }

  const radioQuestion = (
    id,
    label,
    question,
    c1 = 'Không lần nào',
    c2 = '1-3 lần/tháng',
    c3 = '4-8 lần/tháng',
    c4 = '≥9 lần/tháng'
  ) => {
    return (
      <Wrap>
        <WrapItem minW={questionMinW}>
          <Text pr={'12px'} fontSize={quesSize} fontWeight={'700'}>
            <chakra.span fontSize={labelSize} color={'red'}>
              {label}:{' '}
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
    <Box spacing={'12px'}>
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
                    <chakra.span fontSize={labelSize} color={'red'}>
                      Câu 1:{' '}
                    </chakra.span>
                    Bạn thường đi ngủ lúc mấy giờ?
                  </Text>
                </WrapItem>
                <WrapItem>
                  <SelectSleepTime
                    bg={'tdsBgSelect'}
                    ml={'24px'}
                    minW={'150px'}
                    fontSize={ansSize}
                    placeholder={'Chọn giờ'}
                    name={'q1'}
                  />
                </WrapItem>
              </Wrap>
              {radioQuestion(
                'q2',
                'Câu 2',
                'Sau khi lên giường, bạn mất bao nhiêu phút để bắt đầu ngủ?',
                '<15 phút',
                '16 - 30 phút',
                '31 - 60 phút',
                '>60 phút'
              )}
              <Wrap>
                <WrapItem minW={questionMinW}>
                  <Text fontWeight={'700'} fontSize={quesSize} pr={'12px'}>
                    <chakra.span fontSize={labelSize} color={'red'}>
                      Câu 3:{' '}
                    </chakra.span>
                    Bạn thường dậy lúc mấy giờ?
                  </Text>
                </WrapItem>
                <WrapItem>
                  <SelectWakeUpTime
                    bg={'tdsBgSelect'}
                    ml={'24px'}
                    minW={'150px'}
                    fontSize={ansSize}
                    placeholder={'Chọn giờ'}
                    name={'q3'}
                  />
                </WrapItem>
              </Wrap>
              <Wrap>
                <WrapItem minW={questionMinW} maxW={'500px'}>
                  <Text fontWeight={'700'} fontSize={quesSize} pr={'12px'}>
                    <chakra.span fontSize={labelSize} color={'red'}>
                      Câu 4:{' '}
                    </chakra.span>
                    Bạn thường ngủ bao nhiêu tiếng mỗi đêm? (tính thời gian ngủ
                    thực sự, không tính thời gian nằm trên giường nhưng thao
                    thức, dùng điện thoại,...)
                  </Text>
                </WrapItem>
                <WrapItem>
                  <SelectField
                    bg={'tdsBgSelect'}
                    ml={'24px'}
                    fontSize={ansSize}
                    minW={'150px'}
                    placeholder={'Chọn giờ'}
                    name={'q4'}>
                    <option value={3}>3</option>
                    <option value={3.5}>3.5</option>
                    <option value={4}>4</option>
                    <option value={4.5}>4.5</option>
                    <option value={5}>5</option>
                    <option value={5.5}>5.5</option>
                    <option value={6}>6</option>
                    <option value={6.5}>6.5</option>
                    <option value={7}>7</option>
                    <option value={7.5}>7.5</option>
                    <option value={8}>8</option>
                    <option value={8.5}>8.5</option>
                    <option value={9}>9</option>
                    <option value={9.5}>9.5</option>
                    <option value={10}>10</option>
                  </SelectField>
                </WrapItem>
              </Wrap>
              <Box>
                <Text fontWeight={'700'} fontSize={quesSize} pr={'12px'}>
                  <chakra.span fontSize={labelSize} color={'red'}>
                    Câu 5:{' '}
                  </chakra.span>
                  Dưới đây là các vấn dề về giấc ngủ thường gặp. Bạn hãy nghĩ
                  lại xem trong tháng vừa qua, bạn các gặp vấn đề nào và tần
                  suất lặp lại của từng vấn đề nhé!
                </Text>
                <Stack
                  mt={['18px', '18px', '20px']}
                  ml={['20px', '40px', '60px']}
                  spacing={'24px'}>
                  {radioQuestion(
                    'q5a',
                    'A',
                    'Mất hơn 30 phút trên giường mới ngủ được'
                  )}
                  {radioQuestion('q5b', 'B', 'Dậy giữa đêm hoặc gần sáng')}
                  {radioQuestion('q5c', 'C', 'Dậy dùng nhà vệ sinh')}
                  {radioQuestion('q5d', 'D', 'Thấy khó thở')}
                  {radioQuestion('q5e', 'E', 'Ho hoặc ngáy lớn')}
                  {radioQuestion('q5f', 'F', 'Thấy quá lạnh')}
                  {radioQuestion('q5g', 'G', 'Thấy quá nóng')}
                  {radioQuestion('q5h', 'H', 'Gặp ác mộng')}
                  {radioQuestion(
                    'q5i',
                    'I',
                    'Bị đau một bộ phận nào đó khi ngủ (lưng, gáy,...)'
                  )}
                  {radioQuestion('q5j', 'J', 'Gặp vấn đề khác về giấc ngủ')}
                </Stack>
              </Box>
              {radioQuestion(
                'q6',
                'Câu 6',
                'Trong tháng qua, bạn có phải dùng thuốc để ngủ (tây dược, đông dược,...) không?'
              )}
              {radioQuestion(
                'q7',
                'Câu 7',
                'Trong tháng qua, bạn có mất tỉnh táo khi lái xe, ăn uống, tham gia hoạt động xã hội không?'
              )}
              {radioQuestion(
                'q8',
                'Câu 8',
                'Trong tháng qua, bạn có thấy thiếu ngủ làm mất cảm hứng làm việc không?',
                'Không thường gặp',
                'Thỉnh thoảng, không phải vấn đề lớn',
                'Cản trở làm việc một chút',
                'Vấn đề lớn, không thể làm việc tốt được'
              )}
              {radioQuestion(
                'q9',
                'Câu 9',
                'Bạn tự đánh giá chất lượng giấc ngủ trong tháng qua thế nào?',
                'Rất tốt',
                'Tốt',
                'Tệ',
                'Rất tệ'
              )}
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
                  <Text fontSize={'14px'} p={'8px'} color={'red'}>
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
