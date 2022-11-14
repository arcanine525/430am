import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  chakra,
  Icon,
  AspectRatio,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import {connect} from 'react-redux'
import {showModal} from '../store/actions/modal'
import Footer from '../components/Footer'
import {fSizes} from '../theme/spacing'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/all'
import MiniHeader from '../components/MiniHeader'
import tdsSx from '../theme/tdsSx'

const About = () => {
  const renderBenefits = () => {
    const Check = (
      <Image
        w={'20px'}
        h={'18px'}
        mx={['12px', '24px']}
        src={'img/ic_check.png'}
      />
    )
    return (
      <Box
        borderColor={'tdsRed'}
        borderRadius={'16px'}
        borderWidth={'1px'}
        textAlign={'left'}
        fontSize={fSizes.b16}
        pl={'12px'}
        pt={'42px'}
        pr={'36px'}
        pb={'26px'}>
        <Flex>
          {Check}
          <Text>
            Giúp tỉnh táo, tập trung,{' '}
            <chakra.span fontWeight={'700'}>tăng cường trí nhớ</chakra.span>
          </Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>
            Tăng khả năng phản xạ,{' '}
            <chakra.span fontWeight={'700'}>suy luận và giải quyết</chakra.span>{' '}
            vấn đề
          </Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>
            Tăng khả năng <chakra.span fontWeight={'700'}>sáng tạo</chakra.span>{' '}
            và năng suất
          </Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>Cải thiện tâm trạng và năng lượng</Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>
            Khả năng{' '}
            <chakra.span fontWeight={'700'}>xây dựng cơ bắp</chakra.span> tốt
            hơn
          </Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>Giảm lão hoá</Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>
            Hệ thống{' '}
            <chakra.span fontWeight={'700'}>miễn dịch mạnh hơn</chakra.span>
          </Text>
        </Flex>
        <Flex mt={'8px'}>
          {Check}
          <Text>
            <chakra.span fontWeight={'700'}>Da đẹp hơn</chakra.span> và hấp dẫn
            hơn
          </Text>
        </Flex>
      </Box>
    )
  }

  const renderInfo = () => {
    return (
      <Box align={'center'} pt={['20px', '40px', '82px', '82px']}>
        <Heading fontSize={fSizes.b40}>Cứ 3 người lớn thì có</Heading>
        <Heading fontSize={fSizes.b40} color={'tdsRed'}>
          1 người không ngủ đủ giấc
        </Heading>
        <Flex
          justify={'center'}
          mt={['12px', '36px']}
          direction={['column', 'column', 'column', 'row']}>
          <Box mt={'-26px'} mx={'12px'}>
            <Stack pl={['32px', '18px']} pr={['16px', '0px']} maxW={'535px'}>
              <Heading
                alignSelf={'flex-start'}
                position={'relative'}
                textAlign={'left'}
                top={['38px']}
                left={'-18px'}
                pb={'18px'}
                fontSize={fSizes.b24}
                bg={'white'}>
                Ngủ bao nhiêu là đủ?
              </Heading>
              <Box
                fontSize={fSizes.b16}
                textAlign={'left'}
                borderColor={'tdsRed'}
                borderRadius={'16px'}
                borderWidth={'1px'}
                pt={'42px'}
                pr={'36px'}
                pb={'26px'}>
                <Flex>
                  <Image
                    pos={'relative'}
                    top={['-14px']}
                    left={'-20px'}
                    src={'img/img_clock.png'}
                    w={['70px', '90px']}
                    h={['70px', '90px']}
                    bg={'white'}
                  />
                  <Box>
                    <Text>
                      • Người trưởng thành cần ngủ trung bình từ 7-9 tiếng mỗi
                      đêm.
                    </Text>
                    <Text>
                      • Thời gian ngủ cần thiết còn tuỳ vào thể trạng mỗi người
                      và có thể tính toán thông qua hoạt động ngủ trong một thời
                      gian
                    </Text>
                    <Text>
                      • Thiếu ngủ nhiều đêm về lâu dài khiến cơ thể tăng cân,
                      béo phì và tăng nguy cơ mắc các bệnh tiểu đường, tăng
                      huyết áp, bệnh tim, đột quỵ và trầm cảm.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Stack>
            <Stack pl={['32px', '18px']} pr={['16px', '0px']} maxW={'535px'}>
              <Heading
                alignSelf={'flex-start'}
                position={'relative'}
                textAlign={'left'}
                top={['26px', '38px']}
                left={'-6px'}
                pb={['6px', '18px']}
                fontSize={fSizes.b24}
                z-index={'9999'}
                bg={'white'}>
                Lợi ích của ngủ đủ
              </Heading>
              {renderBenefits()}
            </Stack>
          </Box>

          <Text
            display={['block', 'none']}
            px={'40px'}
            mt={'28px'}
            as={'i'}
            fontSize={fSizes.b16}
            color={'tdsRed'}>
            Hãy nhớ rằng: Ngủ đủ (7-9 tiếng/ngày) sẽ giúp bạn khoẻ mạnh, vậy nên
            hãy ZZZs!
          </Text>
          <Image
            alignSelf={['center', 'center', 'center', 'flex-start']}
            mt={'24px'}
            mx={'12px'}
            w={['300px', '555px']}
            h={['320px', '666px']}
            src={'img/img_landing_sleep.png'}
          />
        </Flex>
        <Text
          display={['none', 'block']}
          px={'12px'}
          mt={'28px'}
          as={'i'}
          fontSize={fSizes.b21}
          fontWeight={'700'}
          color={'tdsRed'}>
          Hãy nhớ rằng: Ngủ đủ (7-9 tiếng/ngày) sẽ giúp bạn khoẻ mạnh, vậy nên
          hãy ZZZs!
        </Text>
      </Box>
    )
  }

  const renderQuote = () => {
    return (
      <Flex direction={'column'}>
        <Flex justify={'center'} mt={['0px', '40px']} align={'center'}>
          <Box
            fontSize={'24px'}
            display={['none', 'block']}
            direction={'column'}
            justify={'center'}
            textAlign={'center'}
            minW={'260px'}>
            <Image
              w={'200px'}
              h={'200px'}
              ml={'30px'}
              src={'img/img_about_han.jpg'}
            />
            <Text fontSize={fSizes.b16} mt={'20px'} fontWeight={'700'}>
              Bác sỹ Võ Việt Hản
            </Text>
            <Text fontSize={fSizes.b16} color={'#838383'}>
              Phụ trách chuyên môn
            </Text>
          </Box>
          <Stack
            px={['50px', '100px']}
            spacing={['12px']}
            maxW={'1100px'}
            fontSize={fSizes.b16}
            textAlign={'justify'}>
            <Box
              position={'relative'}
              left={['-30px', '-70px']}
              top={['36px', '40px']}>
              <Icon
                as={ImQuotesLeft}
                color={'tdsRed'}
                w={['20px', '50px']}
                h={['20px', '50px']}
              />
            </Box>
            <Text>
              Lối sống tốt bao gồm những thói quen tốt. Và một thói quen tốt đầu
              tiên nên tập là thói quen giấc ngủ, bao gồm đi ngủ và thức dậy
              đúng giờ, đều đặn mỗi ngày.
            </Text>
            <Text>
              Thử thách Tôi dậy sớm sẽ giúp bạn có thói quen giấc ngủ tốt, từ đó
              tạo nền tảng sức khỏe cho những hoạt động và thói quen tốt khác
              trong ngày của bạn.
            </Text>
            <Box
              alignSelf={'flex-end'}
              position={'relative'}
              right={['-30px', '-70px']}
              bottom={['20px', '40px']}>
              <Icon
                as={ImQuotesRight}
                color={'tdsRed'}
                w={['20px', '50px']}
                h={['20px', '50px']}
              />
            </Box>
          </Stack>
        </Flex>
        <Flex display={['block', 'none']} pb={'32px'}>
          <Flex fontSize={fSizes.b16} justify={'center'}>
            <Image
              w={'50px'}
              h={'50px'}
              ml={'30px'}
              mr={'9px'}
              borderRadius={'16px'}
              src={'img/img_about_han.jpg'}
            />
            <Box>
              <Text mt={'20px'} fontWeight={'700'}>
                Bác sỹ Võ Việt Hản
              </Text>
              <Text>Phụ trách chuyên môn</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  const renderInfo2 = () => {
    return (
      <Flex justify={'center'} bg={'tdsBgGray'} fontSize={fSizes.b16}>
        <Stack maxW={'1100px'}>
          <Stack
            align={'center'}
            justify={'flex-end'}
            spacing={['12px', '40px']}
            direction={['column', 'row']}
            px={['20px']}
            py={['12px', '26px']}>
            <Image
              w={['120px', '250px']}
              h={['80px', '160px']}
              src={'img/ic_about_3.png'}
            />
            <Stack spacing={['12px', '20px']} textAlign={'justify'}>
              <Text
                fontSize={fSizes.b21}
                textAlign={['center', 'justify']}
                fontWeight={'bold'}>
                Phương pháp tiếp cận dựa trên Khoa học
              </Text>
              <Text>
                Khoa học về Giấc ngủ và Khoa học về Thói quen được áp dụng xây
                dựng quy trình từng bước độc đáo của 4:30AM giúp bạn vượt qua
                những thay đổi thói quen hàng ngày và tạo ra sự thay đổi lâu
                dài.
              </Text>
            </Stack>
          </Stack>
          <Box
            display={['none', 'block']}
            alignSelf={'flex-start'}
            mt={'30px'}
            mb={'10px'}
            w="50vw"
            h={'1px'}
            bg={'tdsBorder'}
          />

          <Stack
            align={'center'}
            justify={'flex-end'}
            spacing={['12px', '40px']}
            direction={['column', 'row-reverse']}
            px={['20px']}
            py={['12px', '26px']}>
            <Image
              w={['120px', '250px']}
              h={['80px', '160px']}
              src={'img/ic_about_2.png'}
            />
            <Stack spacing={['12px', '20px']} textAlign={'justify'}>
              <Text
                fontSize={fSizes.b21}
                textAlign={['center', 'justify']}
                fontWeight={'bold'}>
                Động lực cộng đồng
              </Text>
              <Text>
                Khoa học cho chúng ta thấy rằng nếu bạn muốn thực sự phá bỏ một
                thói quen, bạn cần phải gia nhập một câu lạc bộ mà ở đó, mọi
                người sống theo cách bạn muốn để truyền cảm hứng cho bạn ...
                4:30AM chính là cộng đồng của những người mong muốn luyện tập
                thói quen tốt ngủ đủ - dậy sớm.
              </Text>
            </Stack>
          </Stack>
          <Box
            display={['none', 'block']}
            alignSelf={'flex-end'}
            mt={'30px'}
            mb={'10px'}
            w="50vw"
            h={'1px'}
            bg={'tdsBorder'}
          />

          <Stack
            align={'center'}
            justify={'flex-end'}
            spacing={['12px', '40px']}
            direction={['column', 'row']}
            px={['20px']}
            py={['12px', '26px']}>
            <Image
              w={['120px', '250px']}
              h={['80px', '160px']}
              src={'img/ic_about_1.png'}
            />
            <Stack spacing={['12px', '20px']} textAlign={'justify'}>
              <Text
                fontSize={fSizes.b21}
                textAlign={['center', 'justify']}
                fontWeight={'bold'}>
                Ứng dụng trò chơi hóa
              </Text>
              <Text>
                Sự lôi cuốn, tính thử thách của trò chơi hóa giúp tạo động lực
                cho người chơi để định hình lại thói quen ngủ và tiếp tục duy
                trì.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    )
  }

  const renderInfo3 = () => {
    return (
      <Box align={'center'} pt={['20px', '40px', '82px', '82px']}>
        <Heading fontSize={fSizes.b45} color={'tdsRed'}>
          Hành trình 5 năm 2016 - 2021
        </Heading>
        <Flex
          justify={'center'}
          align={'center'}
          direction={['column', 'row']}
          mt={['0px', '50px']}>
          <Flex mx={['30px']} mt={['20px', '0px']} align={'center'}>
            <Image
              w={['35px', '80px']}
              h={['35px', '80px']}
              src={'img/ic_calendar.png'}
              mr={['12px']}
            />
            <Flex
              direction={['row', 'column']}
              justify={'center'}
              align={['center', 'flex-start']}>
              <Text
                mt={['0px', '-12px']}
                fontWeight={'bold'}
                color={'tdsRed'}
                mr={'12px'}
                fontSize={fSizes.b50}>
                06
              </Text>
              <Text mt={['0px', '-12px']} fontSize={fSizes.b21}>
                Chương trình
              </Text>
            </Flex>
          </Flex>

          <Flex mx={['30px']} mt={['20px', '0px']} align={'center'}>
            <Image
              w={['35px', '80px']}
              h={['35px', '80px']}
              src={'img/ic_city.png'}
              mr={['12px']}
            />
            <Flex
              direction={['row', 'column']}
              justify={'center'}
              align={['center', 'flex-start']}>
              <Text
                mt={['0px', '-12px']}
                fontWeight={'bold'}
                color={'tdsRed'}
                mr={'12px'}
                fontSize={fSizes.b50}>
                63
              </Text>
              <Text mt={['0px', '-12px']} fontSize={fSizes.b21}>
                Tỉnh thành
              </Text>
            </Flex>
          </Flex>

          <Flex mx={['30px']} mt={['20px', '0px']} align={'center'}>
            <Image
              w={['35px', '80px']}
              h={['35px', '80px']}
              src={'img/ic_joined.png'}
              mr={['12px']}
            />
            <Flex
              direction={['row', 'column']}
              justify={'center'}
              align={['center', 'flex-start']}>
              <Text
                mt={['0px', '-12px']}
                fontWeight={'bold'}
                color={'tdsRed'}
                mr={'12px'}
                fontSize={fSizes.b50}>
                210k
              </Text>
              <Text mt={['0px', '-12px']} fontSize={fSizes.b21}>
                Người tham gia
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <AspectRatio
          mt={['20px', '50px']}
          maxW={['90vw', '80vw']}
          w={['90vw', '700px']}
          h={['60vw', '470px']}
          ratio={560 / 375}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/xXWFNSFO4ZI"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    )
  }

  const renderPerson = (name, title, avatar) => {
    return (
      <Flex
        fontSize={'24px'}
        direction={'column'}
        justify={'center'}
        align={'center'}
        pt={['12px', '60px']}
        px={['20px', '50px']}
        textAlign={'center'}
        minW={'260px'}>
        <Image
          w={['150px', '180px']}
          h={['150px', '180px']}
          borderRadius={'16px'}
          src={avatar}
        />
        <Text fontSize={fSizes.b21} mt={'20px'} fontWeight={'700'}>
          {name}
        </Text>
        <Text color={'tdsTextGray'} fontWeight={'700'} fontSize={fSizes.b16}>
          {title}
        </Text>
      </Flex>
    )
  }

  const renderTeam = () => {
    return (
      <Flex
        direction={'column'}
        mt={['30px', '60px']}
        justify={'center'}
        align={'center'}
        bg={['white', 'tdsBgGray']}>
        <Heading
          maxW={['280px', '1100px']}
          color={'tdsRed'}
          mt={['26px']}
          mb={['12px']}
          fontSize={['18px', '40px']}>
          Đội ngũ
        </Heading>
        <Stack maxW={'1200px'} mb={['30px', '70px']}>
          <Wrap justify={'center'}>
            <WrapItem>
              {renderPerson(
                'Nhật Lê',
                'Game Player',
                'img/team/img_about_nhatle.png'
              )}
            </WrapItem>
            <WrapItem>
              {renderPerson(
                'Võ Việt Hản',
                'Health Expert',
                'img/img_about_han.jpg'
              )}
            </WrapItem>
            <WrapItem>
              {renderPerson(
                'Ngô Anh Tuấn',
                'Health Expert',
                'img/team/img_about_ngoanhtuan.png'
              )}
            </WrapItem>
            <WrapItem>
              {renderPerson(
                'Lê Thanh Nga',
                'Community Angel',
                'img/team/img_about_lethanhnga.png'
              )}
            </WrapItem>
            <WrapItem>
              {renderPerson(
                'Trần Nam Anh',
                'Technical Monster',
                'img/team/img_about_namanh.png'
              )}
            </WrapItem>
            <WrapItem>
              {renderPerson(
                'Nguyễn Đăng Quang',
                'Technical Monster',
                'img/team/img_about_dangquang.png'
              )}
            </WrapItem>
            <WrapItem>
              {renderPerson(
                'Lục Phương Anh',
                'Project Runner',
                'img/team/img_about_phuonganh.png'
              )}
            </WrapItem>
          </Wrap>
        </Stack>
      </Flex>
    )
  }

  const renderPartner = () => {
    return (
      <Flex
        direction={'column'}
        my={['30px', '60px']}
        justify={'center'}
        align={'center'}>
        <Heading
          maxW={['280px', '1300px']}
          color={'tdsRed'}
          mt={['26px']}
          mb={['24px', '70px']}
          fontSize={['18px', '40px']}>
          Đối tác
        </Heading>
        <Stack maxW={'1200px'} mb={['30px', '70px']}>
          <Wrap justify={'center'}>
            <WrapItem>
              <Image
                w={['47px', '94px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_thanhdoan.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['80px', '160px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_bgvn.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['47px', '94px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_momo.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['170px', '340px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_alphabook.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['97px', '194px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_swequity.png'}
              />
            </WrapItem>
            <WrapItem>
              <Flex
                justify={'center'}
                align={'center'}
                w={['97px', '194px']}
                h={['47px', '94px']}>
                <Text fontSize={['18px', '38px']}>VIET YOGI</Text>
              </Flex>
            </WrapItem>
            <WrapItem>
              <Image
                w={['97px', '144px']}
                h={['63px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_lhmn.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['200px', '400px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_galaxy_cinema.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['47px', '94px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_wewow.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['47px', '94px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                borderRadius={'8px'}
                src={'img/partner/img_partner_ms.png'}
              />
            </WrapItem>
            <WrapItem>
              <Image
                w={['174px', '348px']}
                h={['47px', '94px']}
                mx={['20px']}
                mb={['24px', '70px']}
                src={'img/partner/img_partner_trainery.png'}
              />
            </WrapItem>
          </Wrap>
        </Stack>
      </Flex>
    )
  }

  return (
    <Box sx={tdsSx.fontSetting}>
      <MiniHeader />
      <Box
        bg={'white'}
        // minH={'1000px'}
        align={'center'}
        pt={['48px']}
        px={['12px', '24px']}>
        <Heading
          display={['none', 'block']}
          maxW={['280px', '1100px']}
          color={'tdsRed'}
          fontSize={fSizes.b45}>
          Cộng đồng Ngủ đủ - Dậy sớm - Tạo thói quen tốt
        </Heading>
        <Heading
          display={['block', 'none']}
          maxW={['280px', '1100px']}
          color={'tdsRed'}
          fontSize={fSizes.b45}>
          Cộng đồng
        </Heading>
        <Heading
          display={['block', 'none']}
          maxW={['350px', '1100px']}
          color={'tdsRed'}
          fontSize={fSizes.b45}>
          Ngủ đủ - Dậy sớm - Tạo thói quen tốt
        </Heading>
      </Box>
      {renderInfo()}
      {renderQuote()}
      {renderInfo2()}
      {renderInfo3()}
      {renderTeam()}
      {renderPartner()}
      <Footer mt={['-480px', '-200px']} />
    </Box>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(About)
