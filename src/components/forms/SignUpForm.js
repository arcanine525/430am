import {Box, chakra, Heading, Image, Link, Stack, Text} from '@chakra-ui/react'
import {Form, Formik} from 'formik'
import {signUpSchema} from '../../lib/FormScheme'
import InputField from '../InputField'
import TdsButton from '../TdsButton'
import {connect} from 'react-redux'
import {register} from '../../store/actions/auth'
import {hideModal, showModal} from '../../store/actions/modal'
// import React, {useState} from 'react'
// import SignUpSuccess from '../modals/SignUpSuccess'
// import CheckboxSingle from '../CheckboxSingle'


import {disableSignUp} from '../../config'
import {fSizes} from '../../theme/spacing'

const SignUpForm = ({register, showModal}) => {}

// const SignUpForm = ({register, showModal}) => {
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   console.log('\x1b[36m', '🐣️ sign up | error | : ', error, '\x1b[0m')

//   const handleSubmit = async values => {
//     setLoading(true)
//     const {
//       email,
//       password,
//       passwordConfirm,
//       fullname,
//       phone,
//       birthYear,
//       address,
//     } = values || {}
//     const param = {
//       email,
//       password,
//       passwordConfirm,
//       fullname,
//       phone,
//       birthYear,
//       address,
//     }
//     register(param, (result, response) => {
//       setLoading(false)
//       if (result) {
//         showModal({BodyComponent: <SignUpSuccess />})
//       } else {
//         setError(response?.response?.data?.error?.message)
//       }
//     })
//   }

//   if (disableSignUp) {
//     return (
//       <Box align={'center'} px={'30px'} py={'60px'}>
//         <Image mb={'20px'} w={'120px'} h={'120px'} src={'img/img_sun.png'} />
//         <Heading maxW={'300px'} color={'green'} fontSize={fSizes.b21}>
//           Cảm ơn bạn đã quan tâm đến chương trình!
//         </Heading>
//         <Text mt={['12px', '18px']} maxW={'500px'} fontSize={fSizes.b18}>
//           Rất tiếc chúng tôi đã đóng đăng ký! Hẹn gặp lại ở chương trình tiếp
//           theo! Hãy theo dõi thông tin trên{' '}
//           <chakra.span
//             textDecoration={'underline'}
//             as={Link}
//             href={'https://www.facebook.com/430sang'}>
//             Facebook 4:30 Sáng
//           </chakra.span>{' '}
//           nhé!
//         </Text>
//       </Box>
//     )
//   }

//   return (
//     <Box px={['36px', '48px']} py={['48px', '60px']}>
//       <Heading fontSize={['24px', '36px']}>Xin chào</Heading>
//       <Heading
//         mt={'8px'}
//         maxW={['180px', '256px']}
//         fontSize={['16px', '20px']}
//         color={'gray'}>
//         Vui lòng đăng ký để tham gia thử thách
//       </Heading>
//       <Image
//         position={'absolute'}
//         top={['40px', '65px']}
//         right={['25px', '35px']}
//         objectFit="contain"
//         w={['80px', '120px']}
//         h={['80px', '120px']}
//         src={'img/img_sun.png'}
//       />

//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           passwordConfirm: '',
//           fullname: '',
//           birthYear: '',
//           phone: '',
//           address: '',
//           term: false,
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={signUpSchema}>
//         {({values, errors}) => (
//           <Form>
//             <Stack spacing={'12px'} py={'24px'}>
//               <InputField
//                 name="email"
//                 placeholder="Email của bạn *"
//                 type="email"
//               />
//               <InputField
//                 name="password"
//                 placeholder="Mật khẩu của bạn *"
//                 type="password"
//               />
//               <InputField
//                 name="passwordConfirm"
//                 placeholder="Xác nhận mật khẩu *"
//                 type="password"
//               />
//               <InputField
//                 name="fullname"
//                 placeholder="Họ và tên của bạn *"
//                 type="text"
//               />
//               <InputField
//                 name="birthYear"
//                 placeholder="Năm sinh của bạn *"
//                 type="number"
//               />
//               <InputField
//                 name="phone"
//                 placeholder="Số điện thoại của bạn"
//                 type="tel"
//               />
//               <InputField
//                 name="address"
//                 placeholder="Địa chỉ của bạn"
//                 type="text"
//               />
//               {!!error && (
//                 <Text fontSize={'14px'} color={'tdsRed'}>
//                   {error}
//                 </Text>
//               )}
//               <CheckboxSingle py={'16px'} name={'term'}>
//                 <Text ml={'8px'} fontSize={['16px', '12px']}>
//                   Tôi đã đọc và đồng ý với{' '}
//                   <chakra.span
//                     textDecoration={'underline'}
//                     as={Link}
//                     href={'/terms_and_conditions'}>
//                     Điều khoản sử dụng
//                   </chakra.span>
//                 </Text>
//               </CheckboxSingle>
//               <TdsButton
//                 marginTop={'24px'}
//                 minW={'167px'}
//                 isDisabled={
//                   !values.email ||
//                   !values.password ||
//                   !values.passwordConfirm ||
//                   !values.fullname ||
//                   errors.email ||
//                   errors.password ||
//                   errors.passwordConfirm ||
//                   errors.fullname ||
//                   errors.birthYear ||
//                   errors.phone ||
//                   errors.address ||
//                   errors.term ||
//                   loading
//                 }
//                 type="submit"
//                 colorScheme="purple"
//                 bg={'tdsRed'}
//                 loadingText="Đang đăng ký..."
//                 isLoading={loading}>
//                 Đăng ký
//               </TdsButton>
//             </Stack>
//           </Form>
//         )}
//       </Formik>
//     </Box>
//   )
// }

export default connect(null, {register, showModal, hideModal})(SignUpForm)
