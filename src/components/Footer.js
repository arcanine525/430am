import {chakra, Flex, Link, Stack, Text} from '@chakra-ui/react'
import React from 'react'

const Footer = ({mt = '-380px'}) => {
  return (
    <Flex
      h={'763px'}
      w={'full'}
      mt={mt}
      justifyContent={'center'}
      // backgroundImage={['img/img_footer_mobile.png', 'img/img_footer.png']}
      backgroundImage={['img/footer.png']}

      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Stack
        alignSelf={'flex-end'}
        mb={'16px'}
        px={'12px'}
        textAlign={'center'}>
        {/* <Text fontSize={'14px'}>
          Copyright © 2021 | 4:30AM Challenge | All Rights Reserved.
        </Text>
        <Text fontSize={['12px', '14px']}>
          Notice. 430AM uses cookies to provide necessary website functionality,
          improve your experience and analyze our traffic. By using our website,
          you agree to our{' '}
          <chakra.span textDecoration={'underline'} as={Link} href={'/policy'}>
            Privacy Policy
          </chakra.span>{' '}
          and our cookies usage.
        </Text> */}
      </Stack>
    </Flex>
  )
}

export default Footer
