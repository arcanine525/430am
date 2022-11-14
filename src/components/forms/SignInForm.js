import {Box, chakra, Heading, Image, Stack, Text} from '@chakra-ui/react'
import {Form, Formik} from 'formik'
import {loginSchema} from '../../lib/FormScheme'
import InputField from '../InputField'
import TdsButton from '../TdsButton'
import {connect} from 'react-redux'
import {login} from '../../store/actions/auth'
import {hideModal, showModal} from '../../store/actions/modal'
import React, {useState} from 'react'
import SignUpForm from './SignUpForm'

const SignInForm = ({login, showModal, hideModal, onSuccess}) => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async values => {
    const param = {email: values.email, password: values.password}
    console.log('\x1b[36m', '🐣️ login |  | : ', param, '\x1b[0m')
    setLoading(true)
    login(param, (result, response) => {
      setLoading(false)
      if (result) {
        hideModal()
        onSuccess?.()
      } else {
        setError(response?.response?.data?.error?.message)
      }
    })
  }

  return (
    <Box px={['36px', '48px']} py={['48px', '60px']}>
      <Heading fontSize={['24px', '36px']}>Xin chào</Heading>
      <Heading
        mt={'8px'}
        maxW={['150px', '216px']}
        fontSize={['16px', '21px']}
        color={'gray'}>
        Mời bạn đăng nhập Tài khoản tại đây
      </Heading>
      <Image
        position={'absolute'}
        top={'65px'}
        right={'35px'}
        objectFit="contain"
        w={['80px', '120px']}
        h={['80px', '120px']}
        src={'img/img_sun.png'}
      />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}>
        {({values}) => (
          <Form>
            <Stack spacing={'12px'} py={'24px'}>
              <InputField
                name="email"
                placeholder="Email của bạn"
                type="email"
              />
              <InputField
                name="password"
                placeholder="Mật khẩu của bạn"
                type="password"
              />
              {!!error && (
                <Text fontSize={'14px'} color={'tdsRed'}>
                  {error}
                </Text>
              )}
              <TdsButton
                marginTop={'24px'}
                minW={'167px'}
                isDisabled={!values.email || !values.password || loading}
                type="submit"
                colorScheme="purple"
                bg={'tdsRed'}
                loadingText="Đang đăng nhập..."
                isLoading={loading}>
                Đăng nhập
              </TdsButton>
            </Stack>
          </Form>
        )}
      </Formik>
      <Text fontSize={'14px'}>
        Bạn chưa có tài khoản?{' '}
        <chakra.span
          onClick={() => showModal({BodyComponent: <SignUpForm />})}
          as={'u'}
          fontWeight={'700'}>
          Đăng ký tại đây
        </chakra.span>
      </Text>
    </Box>
  )
}

export default connect(null, {login, showModal, hideModal})(SignInForm)
