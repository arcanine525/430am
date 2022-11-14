import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import TdsButton from '../TdsButton'
import {connect} from 'react-redux'
import {showModal} from '../../store/actions/modal'
import SignUpForm from '../forms/SignUpForm'
import tdsSx from '../../theme/tdsSx'
import {fSizes} from '../../theme/spacing'
import SeeYouLaterModal from '../modals/SeeYouLaterModal'

const Rule = ({isAuthenticated, showModal}) => {
  const titleSize = fSizes.b24
  const contentSize = fSizes.b18

  const onClickSignUp = () => {
    showModal({BodyComponent: <SignUpForm />})
  }

  const onClickFeed = () => {
    showModal({BodyComponent: <SeeYouLaterModal />})
  }

  const renderMobileCta = () => {
    return (
      <Flex display={['block', 'none']}>
        <TdsButton
          h={'32px'}
          w={'120px'}
          fontSize={'14px'}
          mt={'18px'}
          mr={'10px'}
          onClick={onClickSignUp}
          bg={'tdsRed'}>
          Đăng ký
        </TdsButton>
        <TdsButton
          h={'32px'}
          w={'120px'}
          fontSize={'12px'}
          mt={'18px'}
          onClick={onClickFeed}
          bg={'tdsGreen'}>
          Nhận mã nuôi em
        </TdsButton>
      </Flex>
    )
  }

  const renderActivities = () => {
    return (
      <Flex
        w={{lg: '75vw'}}
        maxW={'1100px'}
        alignSelf={'center'}
        align={'flex-start'}
        direction={'column'}
        mt={'40px'}>
        <Box
          display={['none', 'block']}
          alignSelf={'flex-start'}
          mt={'30px'}
          mb={'10px'}
          w="50vw"
          h={'1px'}
          bg={'tdsBorder'}
        />
        <Flex
          mt={'20px'}
          direction={['column', 'row']}
          align={'center'}
          minW={['200px']}>
          <Image
            mr={'12px'}
            w={['42px', '90px']}
            h={['50px', '120px']}
            objectFit="contain"
            src={'img/ic_logo_430.png'}
          />
          <Flex
            maxW={['600px', '500px', '800px', '1000px']}
            direction={'column'}
            align={['center', 'flex-start']}>
            <Heading
              color={'tdsRed'}
              mt={'8px'}
              mb={['16px']}
              fontSize={['14px', '20px']}>
              Thử thách Tôi Dậy Sớm
            </Heading>
            <Text
              textAlign={['center', 'left']}
              fontSize={['12px', '16px']}
              px={'12px'}>
              • 28 ngày thử thách để tạo thói quen tốt ngủ đủ - dậy sớm
            </Text>
            <Text
              textAlign={['center', 'left']}
              fontSize={['12px', '16px']}
              px={'12px'}>
              • Trò chơi vui với cộng đồng giúp thử thách trở nên dễ dàng hơn
            </Text>
            <Text
              textAlign={['center', 'left']}
              fontSize={['12px', '16px']}
              px={'12px'}>
              • Các bài viết khoa học tạo cơ sở cho việc hình thành thói quen
              hiệu quả và bền vững
            </Text>
          </Flex>
        </Flex>

        <Box
          display={['none', 'block']}
          alignSelf={'flex-end'}
          mt={'30px'}
          mb={'10px'}
          w="50vw"
          h={'1px'}
          bg={'tdsBorder'}
        />
        <Flex
          mt={'20px'}
          direction={['column', 'row']}
          align={'center'}
          minW={['200px']}>
          <Image
            mr={'12px'}
            w={['60px', '90px']}
            h={['80px', '120px']}
            src={'img/img_rule_feed.jpg'}
          />
          <Flex
            maxW={['600px', '500px', '800px', '1000px']}
            direction={'column'}
            align={['center', 'flex-start']}>
            <Heading
              display={['none', 'block']}
              color={'tdsRed'}
              mt={'8px'}
              fontSize={['14px', '20px']}>
              Dậy sớm - Nuôi em:{' '}
            </Heading>
            <Heading
              display={['block', 'none']}
              color={'tdsRed'}
              mt={'8px'}
              fontSize={['14px', '20px']}>
              Dậy sớm - Nuôi em:{' '}
            </Heading>
            <Text
              mt={'16px'}
              textAlign={['center', 'left']}
              fontSize={['12px', '16px']}>
              • Đóng góp vào quỹ Nuôi Em để xây nhà nội trú tại trường Phiêng
              Lằn (Lai Châu)
            </Text>
            <Text textAlign={['center', 'left']} fontSize={['12px', '16px']}>
              • Chuyển khoản số tiền từ 50,000-100,000 đồng tới Quỹ Nuôi Em
            </Text>
            <Text textAlign={['center', 'left']} fontSize={['12px', '16px']}>
              • Thông tin tài khoản nhận tài trợ:
            </Text>
            <Text ml={'24px'}>Tài khoản: 0711000280294</Text>
            <Text ml={'24px'}>Ngân hàng: VietComBank</Text>
            <Text ml={'24px'}>Chi nhánh: Thanh Xuân - Hà Nội</Text>
            <Text ml={'24px'}>Chủ TK: Hoàng Hoa Trung</Text>
            <Text ml={'24px'}>Số điện thoại: 0975 302 307</Text>
            <Text ml={'24px'}>
              Cú pháp:{' '}
              <chakra.span color={'tdsRed'} as={'b'}>
                Họ Tên - 430AM
              </chakra.span>
            </Text>
            <Text textAlign={['center', 'left']} fontSize={['12px', '16px']}>
              • Thông tin chi tiết tại:{' '}
              <chakra.span
                textDecoration={'underline'}
                as={Link}
                href={'https://www.nuoiem.com'}>
                https://www.nuoiem.com
              </chakra.span>{' '}
              hoặc{' '}
              <chakra.span
                textDecoration={'underline'}
                as={Link}
                href={'https://lixitruong.sucmanh2000.com'}>
                https://lixitruong.sucmanh2000.com
              </chakra.span>
            </Text>
          </Flex>
        </Flex>

        <Box
          display={['none', 'block']}
          alignSelf={'flex-start'}
          mt={'30px'}
          mb={'10px'}
          w="50vw"
          h={'1px'}
          bg={'tdsBorder'}
        />
        <Flex
          mt={'20px'}
          direction={['column', 'row']}
          align={'center'}
          minW={['200px']}>
          <Image
            mr={'12px'}
            w={['60px', '90px']}
            h={['80px', '120px']}
            src={'img/img_rule_seminar.jpg'}
          />
          <Flex
            maxW={['600px', '500px', '800px', '1000px']}
            direction={'column'}
            align={['center', 'flex-start']}>
            <Heading
              color={'tdsRed'}
              mt={'8px'}
              mb={['16px']}
              fontSize={['14px', '20px']}>
              Hội thảo chuyên đề
            </Heading>
            <Text textAlign={['center', 'left']} fontSize={['12px', '16px']}>
              Thực hiện online qua Zoom và phát trực tiếp trên kênh Facebook và
              Youtube của 4:30 Sáng
            </Text>
            <Text textAlign={['center', 'left']} fontSize={['12px', '16px']}>
              • Ngày 8/12: lấy lại thói quen ngủ sau thời gian gián đoạn
            </Text>
            <Text textAlign={['center', 'left']} fontSize={['12px', '16px']}>
              • Ngày 15/12: dinh dưỡng và giấc ngủ
            </Text>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <Box align={'center'} pt={['12px', '18px', '32px', '40px']}>
      <Box
        alignSelf={'center'}
        // maxW={['450px', '700px', '900px', '1100px']}
        py={'24px'}
        px={['4px', '12px']}
        mx={'24px'}>
        <Flex justify={'center'} alignItems={'center'}>
          <Image
            w={['300px', '543px']}
            h={['56px', '107px']}
            src={'img/img_challenge_tds_x_nuoiem.png'}
          />
        </Flex>
        <Flex
          w={['256px', '414px']}
          h={['43px', '70px']}
          mt={['18px']}
          justify={'center'}
          align={'center'}
          borderRadius={['20px', '32px']}
          borderColor={'tdsRed'}
          borderWidth={['1px', '2px']}
          sx={{
            background:
              'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
          }}>
          <Text
            fontSize={['22px', '36px']}
            fontWeight={'bold'}
            color={'tdsRed'}
            sx={{
              ...tdsSx.fontSetting,
              // ...tdsSx.textShadow,
            }}>
            Từ 3.1 - 30.1.2022
          </Text>
        </Flex>
        <Box maxW={'1100px'} textAlign={'center'} fontSize={fSizes.b18}>
          <Text mt={['32px', '32px']}>
            Tháng 1 là thời điểm nhiều người lựa chọn để bắt đầu thực hiện mục
            tiêu mới hoặc làm một việc gì đó thật ý nghĩa nhằm tận dụng năng
            lượng tươi mới mà một năm mới mang lại cho bản thân cảm giác khỏe
            mạnh, hiệu quả và hạnh phúc.
          </Text>
          <Text mt={['20px', '20px']}>
            Sức mạnh cộng đồng chính là yếu tố cốt lõi làm động lực cho các
            thành viên 4:30AM hoàn thành thử thách. Sức mạnh cộng đồng cũng
            chính là yếu tố giúp Nuôi Em đem lại điều kỳ diệu cho các em nhỏ ở
            bản cao. Bởi vậy:
          </Text>
          <Text mt={['20px', '20px']}>
            Chào đón năm mới 2022, 4:30 Sáng mong muốn chúng ta sẽ cùng nhau
            khởi động một cách ý nghĩa với{' '}
            <chakra.span color={'tdsRed'} as={'b'}>
              Thử thách Tôi Dậy Sớm x Nuôi Em
            </chakra.span>{' '}
            . Năm nay, bên cạnh hoạt động{' '}
            <chakra.span color={'tdsRed'} fontWeight={'bold'} as={'i'}>
              check-in hàng ngày trong khoảng thời gian 4h30 - 6h30
            </chakra.span>{' '}
            như mọi khi, thành viên cộng đồng 4:30AM sẽ có cơ hội đóng góp vào
            Quỹ Nuôi Em để cùng chúng tôi tài trợ xây dựng phòng học cho các em
            nhỏ tại trường Phiêng Lằn xã Nậm Chà, huyện Nậm Nhùn, tỉnh Lai Châu
            ham học nhưng thiếu thốn điều kiện.
          </Text>
        </Box>
        <Flex direction={['column', 'row']} mt={'44px'} justify={'center'}>
          <Flex justify={'center'} mt={['0px', '60px']}>
            <Box minW={['50px', '200px']} py={'8px'} px={['0px', '8px']}>
              <Image
                w={['50px', '200px']}
                h={['50px', '200px']}
                src={'img/img_rule_step1.png'}
              />
              <Heading color={'tdsRed'} fontSize={titleSize} mt={'12px'}>
                Bước 1: Đăng ký
              </Heading>
              <Heading
                mt={['0px', '20px']}
                fontSize={contentSize}
                maxW={['100px', '270px']}>
                Chỉ 1 lần duy nhất khi bắt đầu chương trình
              </Heading>
              <TdsButton
                display={['none', 'block']}
                h={'55px'}
                minW={'200px'}
                fontSize={'20px'}
                mt={'18px'}
                onClick={onClickSignUp}
                bg={'tdsRed'}>
                Đăng ký
              </TdsButton>
            </Box>
            <Image
              w={['60px', '100px']}
              h={['40px', '75px']}
              mt={['20px', '200px']}
              src={'img/img_red_arrow.png'}
            />
            <Box minW={['50px', '200px']} py={'8px'} px={['0px', '8px']}>
              <Image
                w={['50px', '200px']}
                h={['50px', '200px']}
                src={'img/img_rule_step2.png'}
              />
              <Heading color={'tdsRed'} fontSize={titleSize} mt={'12px'}>
                Bước 2: Check-in
              </Heading>
              <Heading
                mt={['0px', '20px']}
                fontSize={contentSize}
                maxW={['100px', '255px']}>
                4h30 - 6h30 sáng hàng ngày 1 lần = 1 điểm
              </Heading>
            </Box>
          </Flex>
          <Flex justify={'center'}>
            <Image
              display={['none', 'block']}
              w={['60px', '100px']}
              h={['120px', '200px']}
              mt={'220px'}
              src={'img/img_rule_double_arrow.png'}
            />
            <Flex
              direction={'column'}
              align={'center'}
              borderRadius={'32px'}
              ml={['0px', '12px']}
              py={['0xp', '30px']}
              px={['0xp', '16px']}
              backgroundColor={['white', '#F4F4F4']}>
              <Box
                py={'8px'}
                px={['0px', '8px']}
                textAlign={'left'}
                maxW={['450px']}>
                <Heading color={'tdsRed'} fontSize={titleSize} mt={'12px'}>
                  Dậy sớm - Nuôi em
                </Heading>
                <Heading
                  mt={['0px', '12px']}
                  mb={['0px', '12px']}
                  fontSize={contentSize}>
                  Khuyến khích người chơi tham gia
                </Heading>
                <Stack maxW={['250px', '380px']} spacing={0}>
                  <Text fontSize={contentSize}>
                    • Đóng góp vào quỹ Nuôi Em để xây nhà nội trú tại trường
                    Phiêng Lằn (Lai Châu)
                  </Text>
                  <Text fontSize={contentSize}>
                    • Chuyển khoản số tiền từ 50,000-100,000 đồng tới Quỹ Nuôi
                    Em
                  </Text>
                  <Text fontSize={contentSize}>• Thông tin tài khoản:</Text>
                  <Text pl={'12px'} fontSize={contentSize}>
                    Tài khoản: 0711000280294
                  </Text>
                  <Text pl={'12px'} fontSize={contentSize}>
                    Ngân Hàng: VietComBank CN: Thanh Xuân - Hà Nội
                  </Text>
                  <Text pl={'12px'} fontSize={contentSize}>
                    Chủ TK: Hoàng Hoa Trung
                  </Text>
                  <Text pl={'12px'} fontSize={contentSize}>
                    Cú pháp:{' '}
                    <chakra.span color={'tdsRed'} as={'b'}>
                      Họ Tên - 430AM
                    </chakra.span>
                  </Text>
                </Stack>
              </Box>
              <Box
                py={'8px'}
                px={['0px', '8px']}
                textAlign={'left'}
                maxW={['450px']}>
                <Heading color={'tdsRed'} fontSize={titleSize} mt={'12px'}>
                  Hoạt động bên lề
                </Heading>
                <Heading
                  mt={['0px', '12px']}
                  mb={['0px', '12px']}
                  fontSize={contentSize}>
                  Khuyến khích người chơi tham gia
                </Heading>
                <Stack maxW={['250px', '380px']} spacing={0}>
                  <Text fontSize={contentSize}>
                    • Viết bài/ post ảnh có hashtag chương trình trên trang cá
                    nhân: 1 bài = 1 điểm
                  </Text>
                  <Text fontSize={contentSize}>
                    • Nhận những phần quà bất ngờ :)
                  </Text>
                </Stack>
              </Box>
              {renderMobileCta()}
            </Flex>
          </Flex>
        </Flex>
        {renderActivities()}
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(Rule)
