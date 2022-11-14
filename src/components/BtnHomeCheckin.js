/* eslint-disable react-hooks/exhaustive-deps */
import TdsButton from './TdsButton'
import React, {useEffect, useState} from 'react'
import CheckinForm from './forms/CheckinForm'
import SignInForm from './forms/SignInForm'
import {connect} from 'react-redux'
import {showModal} from '../store/actions/modal'
import {checkin} from '../config'
import {Text} from '@chakra-ui/react'

const BtnHomeCheckin = ({isAuthenticated, showModal}) => {
  const [checkedToday, setCheckedToday] = useState(false)
  const [isOnTime, setIsOnTime] = useState(false)

  const now = new Date()
  const openDay = new Date(checkin.fromDate)
  const beforeTime =
    now.getHours() < checkin.start.hour ||
    (now.getHours() === checkin.start.hour &&
      now.getMinutes() < checkin.start.min)
  const afterTime =
    now.getHours() > checkin.end.hour ||
    (now.getHours() === checkin.end.hour && now.getMinutes() > checkin.end.min)
  const beforeOpenDay = now.getTime() < openDay.getTime()

  const disabled = beforeOpenDay || beforeTime || afterTime || checkedToday

  console.log('\x1b[36m', '🐣️ isOnTime |  | : ', isOnTime, '\x1b[0m')

  useEffect(() => {
    const lastCheckin = localStorage.getItem('lastCheckin')
    if (lastCheckin) {
      const lastCheckinDate = new Date(Number(lastCheckin))
      const now = new Date()
      if (
        now.getDate() === lastCheckinDate.getDate() &&
        now.getMonth() === lastCheckinDate.getMonth()
      ) {
        setCheckedToday(true)
      }
    }
  }, [])

  const onTimeCheckin = () => {
    setIsOnTime(true)
  }

  const onCheckinSuccess = () => {
    const now = new Date()
    localStorage.setItem('lastCheckin', now.getTime())
    setCheckedToday(true)
  }

  const onClickCheckin = () => {
    if (isAuthenticated) {
      showModal({BodyComponent: <CheckinForm onSuccess={onCheckinSuccess} />})
    } else {
      showModal({
        BodyComponent: (
          <SignInForm
            onSuccess={() => {
              showModal({
                BodyComponent: <CheckinForm onSuccess={onCheckinSuccess} />,
              })
            }}
          />
        ),
      })
    }
  }

  return (
    <TdsButton
      direction={'column'}
      flex={'1'}
      disabled={disabled}
      onClick={onClickCheckin}
      fontSize={disabled ? ['12px', '16px'] : ['13px', '20px']}
      minW={['125px', '200px']}
      minH={['34px', '56px']}
      bg={'tdsBlue'}
      mr={'18px'}
      mt={'12px'}>
      {disabled ? <CheckinTimer onTimeCheckin={onTimeCheckin} /> : 'Check-in'}
    </TdsButton>
  )
}

const convertSecondToTime = second => {
  let totalSeconds = second || 0
  let h = Math.floor(totalSeconds / 3600)
  totalSeconds %= 3600
  let m = Math.floor(totalSeconds / 60)
  let s = totalSeconds % 60
  if (h > 0)
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${
      s < 10 ? '0' : ''
    }${s}`
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

const CheckinTimer = ({onTimeCheckin}) => {
  const [time, setTime] = useState('')

  const calculateTime = () => {
    const now = new Date()
    if (
      now.getHours() < checkin.start.hour ||
      (now.getHours() === checkin.start.hour &&
        now.getMinutes() < checkin.start.min)
    ) {
      const checkinDate = new Date()
      checkinDate.setHours(checkin.start.hour)
      checkinDate.setMinutes(checkin.start.min, 0, 0)
      const delta = Math.round((checkinDate.getTime() - now.getTime()) / 1000)
      setTime(convertSecondToTime(delta))
    } else if (
      now.getHours() === checkin.start.hour &&
      now.getMinutes() === checkin.start.min
    ) {
      onTimeCheckin?.()
    } else {
      const checkinDate = new Date()
      checkinDate.setDate(checkinDate.getDate() + 1)
      checkinDate.setHours(checkin.start.hour)
      checkinDate.setMinutes(checkin.start.min, 0, 0)
      const delta = Math.round((checkinDate.getTime() - now.getTime()) / 1000)
      setTime(convertSecondToTime(delta))
    }
  }

  useEffect(() => {
    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => {
      interval && interval?.remove?.()
    }
  }, [])

  return <Text>{`Check-in sau ${time}`}</Text>
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(BtnHomeCheckin)
