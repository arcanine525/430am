export const calculatePsqi = async answer => {
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
  } = answer

  const sleepHourQ3Q1 = (q3 - q1) / 1000 / 60 / 60
  console.log(
    '\x1b[36m',
    '🐣️ calculate psqi | calculate sleep hour | : ',
    sleepHourQ3Q1,
    '\x1b[0m'
  )

  const tp1 = q9
  const tp2 = Math.ceil((q2 + q5a) / 2)

  let tp3
  if (q4 >= 7) tp3 = 0
  else if (q4 >= 6) tp3 = 1
  else if (q4 >= 5) tp3 = 2
  else tp3 = 3

  let tp4
  const tp4percent = Math.min(1, q4 / sleepHourQ3Q1)
  if (tp4percent >= 0.85) tp4 = 0
  else if (tp4percent >= 0.75) tp4 = 1
  else if (tp4percent >= 0.65) tp4 = 2
  else tp4 = 3

  let tp5
  const tp5Sum = q5b + q5c + q5d + q5e + q5f + q5g + q5h + q5i + q5j
  if (tp5Sum >= 19) tp5 = 3
  else if (tp5Sum >= 10) tp5 = 2
  else if (tp5Sum >= 1) tp5 = 1
  else tp5 = 0

  const tp6 = q6
  const tp7 = Math.ceil((q7 + q8) / 2)

  const tp = {tp1, tp2, tp3, tp4, tp5, tp6, tp7}
  const point = tp1 + tp2 + tp3 + tp4 + tp5 + tp6 + tp7

  console.log('\x1b[36m', '🐣️ calculate psqi | tp | : ', tp, '\x1b[0m')

  const color = point >= 5 ? 'red' : 'green'
  const message =
    point >= 5
      ? 'Tháng vừa qua, chất lượng giấc ngủ của bạn không tốt!'
      : 'Tháng vừa qua, chất lượng giấc ngủ của bạn tốt! Hãy duy trì giấc ngủ hiện tại để luôn có nền tảng sức khỏe tốt nhé.'

  return {point, message, color, tp}
}
