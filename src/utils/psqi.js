export const calculatePsqi = async answer => {
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
  } = answer

  // const {
  //   q1,
  //   ...ansQ2
  // } = answer


  // console.log('\x1b[36m', '🐣️ calculate psqi | tp | : ', tp, '\x1b[0m')
  let point = 0
  let resultQ1 = ''
  if (q1 === '<5') {
    resultQ1 = 'Thời gian sử dụng điện thoại của bạn ở mức thấp, nếu không phát sinh nhu cầu cần thiết phải dùng nhiều hơn thì có thể duy trì ở mức này nhé!'
  }
  if (q1 === '5-7') {
    resultQ1 = 'Thời gian sử dụng điện thoại của bạn ở mức trung bình, nếu không phát sinh nhu cầu cần thiết phải dùng nhiều hơn thì nên duy trì ở mức này nhé!'
  }
  if (q1 === '7-10') {
    resultQ1 = 'Thời gian sử dụng điện thoại của bạn khá nhiều, nếu không phải vì nhu cầu cần thiết bạn nên điều chỉnh thời gian để đảm bảo sức khỏe nhé!'
  }
  if (q1 === '>10') {
    resultQ1 = 'Thời gian sử dụng điện thoại của bạn quá nhiều, nếu không phải vì nhu cầu cần thiết bạn nên điều chỉnh thời gian để đảm bảo sức khỏe nhé!'
  }

  let answerList = [q5a, q5b, q5c, q5d, q5e, q5f, q5g, q5h, q5i]
  let resultQ2 = ''
  const c1 = answerList.filter((val) => val = 1).length // c1 = 'Không bao giờ',
  const c2 = answerList.filter((val) => val = 2).length // c2 = 'Thỉnh thoảng',
  const c3 = answerList.filter((val) => val = 3).length // c3 = 'Thường xuyên',
  const c4 = answerList.filter((val) => val = 4).length // c4 = 'Luôn luôn',

  if (c3 < 3 || c4 < 3) {
    resultQ2 = 'Mức độ phụ thuộc trí nhớ và tư duy vào thiết bị kĩ thuật số của bạn ở mức cơ bản, chưa đáng báo động. Hãy tiếp tục duy trì mức độ này, hoặc nếu có thể hãy tập thói quen chủ động tư duy nhiều thêm nhé!'
  }

  if (c3 >=3 || c4 >= 3) {
    resultQ2 = 'Mức độ phụ thuộc trí nhớ và tư duy vào thiết bị kĩ thuật số của bạn ở mức khá cao. Hãy tập thói quen chủ động tư duy nhiều hơn nhé!'
  }

  if (c3 > 5 || c4 > 5){
    resultQ2 = 'Mức độ phụ thuộc trí nhớ và tư duy vào thiết bị kĩ thuật số của bạn ở mức khá cao. Hãy tập thói quen chủ động tư duy nhiều hơn nhé!'
  }

  const color = point >= 5 ? 'red' : 'green'

  // const message = resultQ1 + ' ' + resultQ2

  return { resultQ1, resultQ2, color }
}
