import * as Yup from 'yup'

const schemaFactory = shape => Yup.object().shape(shape)

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema = schemaFactory({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Vui lòng điền email'),
  password: Yup.string().required('Vui lòng điền mật khẩu'),
})

export const passwordResetSchema = schemaFactory({
  email: Yup.string()
    .required('Please enter your email')
    .min(5, 'Username has to be at least 5 charracters'),
})

export const signUpSchema = schemaFactory({
  fullname: Yup.string().required('Vui lòng điền tên'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Vui lòng điền email'),
  password: Yup.string()
    .required('Vui lòng điền mật khẩu')
    .min(8, 'Mật khẩu tối thiểu 8 ký tự'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Mật khẩu không chính xác')
    .required('Vui lòng xác nhận mật khẩu'),
  birthYear: Yup.number()
    .min(1920, 'Năm sinh không hợp lệ')
    .max(2020, 'Năm sinh không hợp lệ')
    .required('Vui lòng điền năm sinh'),
  phone: Yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  term: Yup.boolean().oneOf([true], 'Vui lòng đồng ý với điều khoản sử dụng'),
})

export const psqiSchema = schemaFactory({
  q1: Yup.string().required('Vui lòng chọn đáp án'),
  // q2: Yup.string().required('Vui lòng chọn đáp án'),
  // q3: Yup.string().required('Vui lòng chọn đáp án'),
  // q4: Yup.string().required('Vui lòng chọn đáp án'),
  q5a: Yup.string().required('Vui lòng chọn đáp án'),
  q5b: Yup.string().required('Vui lòng chọn đáp án'),
  q5c: Yup.string().required('Vui lòng chọn đáp án'),
  q5d: Yup.string().required('Vui lòng chọn đáp án'),
  q5e: Yup.string().required('Vui lòng chọn đáp án'),
  q5f: Yup.string().required('Vui lòng chọn đáp án'),
  q5g: Yup.string().required('Vui lòng chọn đáp án'),
  q5h: Yup.string().required('Vui lòng chọn đáp án'),
  q5i: Yup.string().required('Vui lòng chọn đáp án'),
  // q5j: Yup.string().required('Vui lòng chọn đáp án'),
  // q6: Yup.string().required('Vui lòng chọn đáp án'),
  // q7: Yup.string().required('Vui lòng chọn đáp án'),
  // q8: Yup.string().required('Vui lòng chọn đáp án'),
  // q9: Yup.string().required('Vui lòng chọn đáp án'),
})
