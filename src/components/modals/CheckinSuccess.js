import React from 'react'
import {Box, Heading, Image, Text} from '@chakra-ui/react'

const CheckinSuccess = () => {
  return (
    <Box px={'60px'} py={'60px'}>
      <Heading color={'green'} fontSize={'36px'}>
        Xác nhận!
      </Heading>
      <Heading mt={'8px'} maxW="200px" fontSize={'21px'} color={'gray'}>
        Chúng tôi ghi nhận thông tin checkin từ bạn.
      </Heading>
      <Image
        position={'absolute'}
        top={'0px'}
        right={'0px'}
        w={'165px'}
        h={'165px'}
        src={'img/img_sun_success.png'}
      />
      <Text fontSize={'14px'} mt={'20px'}>
        Chúc bạn ngủ đủ giấc để có năng lượng thật tốt cho ngày mới! Hãy tiếp
        tục theo dõi các thông tin trên Tôi dậy sớm và luôn hoàn thành thử thách
        bạn nhé!
      </Text>
    </Box>
  )
}

export default CheckinSuccess
