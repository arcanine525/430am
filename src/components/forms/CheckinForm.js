import {
  Box,
  Flex,
  Heading,
  Image,
  Select,
  Text,
  Textarea,
  Input,
} from '@chakra-ui/react'
import TdsButton from '../TdsButton'
import {connect} from 'react-redux'
import {hideModal, showModal} from '../../store/actions/modal'
import React, {useState} from 'react'
// import {MdArrowDropDown} from 'react-icons/all'
import {MdArrowDropDown} from 'react-icons/md'

import {checkin} from '../../store/actions/checkin'
import CheckinSuccess from '../modals/CheckinSuccess'
import {fSizes} from '../../theme/spacing'

const getTime = (h, m, isPreviousDay) => {
  const date = new Date()
  if (isPreviousDay) {
    date.setDate(date.getDate() - 1)
  }
  date.setHours(h, m, 0, 0)
  return date.getTime()
}

const defaultValue = getTime(22, 0, true)

const CheckinForm = ({onSuccess, checkin, showModal, hideModal, auth}) => {
  const [sleepAt, setSleepAt] = useState(defaultValue)
  const [sharing, setSharing] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (auth?.user?.email) {
      setLoading(true)
      const now = new Date()
      now.setSeconds(0, 0)
      checkin(
        {
          email: auth.user.email,
          checkinAt: now.getTime(),
          sleepAt,
          sharing,
          shareUrl,
        },
        result => {
          setLoading(false)
          if (result) {
            showModal({BodyComponent: <CheckinSuccess />})
            onSuccess?.()
          } else {
            //todo handle error
            hideModal()
          }
        }
      )
    }
  }

  const onChangeSleepAt = e => {
    setSleepAt(e.target.value)
  }

  const onChangeSharing = e => {
    let inputValue = e.target.value
    setSharing(inputValue)
  }

  const onChangeShareUrl = e => {
    let inputValue = e.target.value
    setShareUrl(inputValue)
  }

  return (
    <Box px={'48px'} py={'60px'}>
      <Heading fontSize={['28px', '30px']}>Chào buổi sáng!</Heading>
      <Heading
        mt={'8px'}
        maxW="230px"
        fontSize={['18px', '20px']}
        color={'gray'}>
        Hãy check-in để ghi nhận giờ dậy của bạn nhé!
      </Heading>
      <Image
        position={'absolute'}
        top={'65px'}
        right={'35px'}
        w={'122px'}
        h={'117px'}
        src={'img/img_sun.png'}
      />
      <Flex mt={'36px'} alignItems={'center'}>
        <Text fontSize={fSizes.b14} color={'#7E7E7E'} flex={1}>
          • Hôm qua, bạn đi ngủ lúc mấy giờ?
        </Text>
        <Select
          bg={'#F6F6F6'}
          borderColor={'#C2C2C2'}
          size={'xs'}
          w={'110px'}
          fontSize={fSizes.b14}
          defaultValue={sleepAt}
          onChange={onChangeSleepAt}
          icon={<MdArrowDropDown />}>
          <option value={getTime(20, 0, true)}>20:00</option>
          <option value={getTime(20, 30, true)}>20:30</option>
          <option value={getTime(21, 0, true)}>21:00</option>
          <option value={getTime(21, 30, true)}>21:30</option>
          <option value={getTime(22, 0, true)}>22:00</option>
          <option value={getTime(22, 30, true)}>22:30</option>
          <option value={getTime(23, 0, true)}>23:00</option>
          <option value={getTime(23, 30, true)}>23:30</option>
          <option value={getTime(0, 0, false)}>00:00</option>
          <option value={getTime(0, 30, true)}>00:30</option>
          <option value={getTime(1, 0, true)}>01:00</option>
        </Select>
      </Flex>

      <Text
        mt={['12px', '20px']}
        fontSize={fSizes.b14}
        color={'#7E7E7E'}
        flex={1}>
        • Hãy chia sẻ dự định của bạn cho ngày hôm nay nhé!
      </Text>
      <Textarea
        mt={'4px'}
        onChange={onChangeSharing}
        fontSize={fSizes.b14}
        placeholder="Chia sẻ của bạn..."
      />

      <Text
        mt={['12px', '20px']}
        fontSize={fSizes.b14}
        color={'#7E7E7E'}
        flex={1}>
        • Nếu bạn có bài viết/video chia sẻ trên FB cá nhân và gắn hashtag
        #430AMChallenge hoặc #Toidaysom thì hãy chia sẻ link ở đây nhé!
      </Text>
      <Input
        mt={'4px'}
        value={shareUrl}
        onChange={onChangeShareUrl}
        placeholder="Liên kết bài chia sẻ..."
        fontSize={fSizes.b14}
      />

      <TdsButton
        mt={'44px'}
        minW={'167px'}
        isDisabled={loading}
        type="submit"
        colorScheme="purple"
        bg={'red'}
        onClick={handleSubmit}
        loadingText="Đang check-in..."
        isLoading={loading}>
        Check-in
      </TdsButton>
    </Box>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {checkin, showModal, hideModal})(
  CheckinForm
)
