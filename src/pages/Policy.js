import {Box, Heading, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {connect} from 'react-redux'
import {showModal} from '../store/actions/modal'
import Footer from '../components/Footer'
import {fSizes} from '../theme/spacing'
import MiniHeader from '../components/MiniHeader'
import tdsSx from '../theme/tdsSx'

const Policy = () => {
  const renderContent = () => {
    return (
      <Box sx={tdsSx.fontSetting}>
        <Box bg={'white'} align={'center'} pt={['48px']} px={['12px', '24px']}>
          <Stack
            mt={'24px'}
            spacing={['12px', '24px']}
            textAlign={'justify'}
            fontSize={fSizes.b18}
            maxW={['600px', '760px', '980px', '1040px']}>
            <Heading textAlign={'center'} fontSize={fSizes.b40}>
              Chính sách bảo mật{' '}
            </Heading>

            <Text fontWeight={'700'}>1. Giới thiệu</Text>
            <Text>
              Nhận thức được tầm quan trọng của việc bảo vệ thông tin cá nhân
              của thành viên cộng đồng 4:30AM, những người đăng ký tham gia Thử
              thách ngủ đủ - dậy sớm của 4:30AM và người sử dụng khác (sau đây
              gọi chung là "Thành viên"), chúng tôi có trách nhiệm quản lý, bảo
              vệ và xử lý các thông tin cá nhân của Thành viên theo đúng các quy
              định pháp luật Việt Nam hiện hành. Chính sách bảo mật này nhằm mô
              tả cách thức chúng tôi thu thập, lưu trữ, xử lý, sử dụng thông tin
              cá nhân thu thập được từ Thành viên trong quá trình Thành viên
              tương tác với trang web của 4:30AM. Chính sách bảo mật này áp dụng
              cho trang web 430sang.com và các chương trình/hoạt động do 4:30AM
              cung cấp cho Thành viên của cộng đồng 4:30AM.
            </Text>
            <Text>
              Thông qua việc xác nhận tạo tài khoản, xác nhận đăng ký để được
              truy cập thông tin, thực hiện check-in và tham gia các hoạt động
              khác trên trang web của 4:30AM, Thành viên xác nhận và đồng ý rằng
              Thành viên chấp nhận các điều khoản của Chính sách bảo mật này.
              Theo đó, Thành viên đồng ý cho phép chúng tôi thu thập, xử lý, sử
              dụng dữ liệu cá nhân của Thành viên như trình bày tại phần dưới
              đây.
            </Text>

            <Text fontWeight={'700'}>2. Phạm vi thu thập thông tin</Text>
            <Text>
              Thông tin cá nhân là thông tin về cá nhân hoặc liên quan đến việc
              xác định hoặc có thể xác định một cá nhân cụ thể, bao gồm nhưng
              không giới hạn ở dữ liệu cá nhân cơ bản: họ tên; năm sinh; số điện
              thoại; địa chỉ; và email cá nhân. Ngoài ra, thông tin cá nhân cũng
              bao gồm nhưng không giới hạn ở các dữ liệu phản ánh hoạt động của
              cá nhân trên trang web của 4:30AM, bao gồm số lần truy cập trang
              web, số liên kết mà Thành viên nhấp vào, hoạt động check-in, kết
              quả trắc nghiệm PSQI, và những thông tin khác liên quan đến việc
              Thành viên kết nối đến trang web của 4:30AM.
            </Text>
            <Text>
              4:30AM sẽ thu thập và xử lý thông tin cá nhân từ Thành viên chỉ
              khi Thành viên tự nguyện gửi thông tin đó cho 4:30AM và đồng ý để
              4:30AM thu thập và xử lý thông tin. Thành viên có thể từ chối cung
              cấp thông tin cá nhân, tuy nhiên việc từ chối đó có thể hạn chế
              Thành viên sử dụng một số tính năng trên trang web của 4:30AM và
              Thành viên hoàn toàn chấp nhận điều này.
            </Text>
            <Stack>
              <Text>
                4:30AM sẽ thu thập thông tin cá nhân của Thành viên khi:
              </Text>
              <Text>
                • Thành viên tạo tài khoản để sử dụng trang web của 4:30AM, tham
                gia check-in và các thử thách khác do 4:30AM tổ chức, tham gia
                khảo sát trực tuyến, truy cập web,…
              </Text>
              <Text>
                • Thành viên yêu cầu 4;30AM hỗ trợ khắc phục các vấn đề đang gặp
                phải khi sử dụng trang web của 4:30AM hoặc hỗ trợ các vấn đề
                khác thông qua tính năng hỗ trợ Thành viên trên trang web,
                Facebook Fanpage, qua email hay qua điện thoại.
              </Text>
            </Stack>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              3. Mục đích và phạm vi sử dụng thông tin
            </Text>
            <Stack>
              <Text>
                Thành viên đồng ý cho 4:30AM sử dụng và/hoặc xử lý thông tin của
                Thành viên cho các mục đích:
              </Text>
              <Text>
                • Xem xét và/hoặc xử lý yêu cầu đăng ký của Thành viên;
              </Text>
              <Text>
                • Hỗ trợ/giải đáp các thắc mắc của Thành viên khi tương tác trên
                trang Web;
              </Text>
              <Text>
                • Xác minh tài khoản Thành viên và các hoạt động của Thành viên
                trên trang web của 4:30AM;
              </Text>
              <Text>
                • Quản trị liên kết của Thành viên với 4:30Am thông qua việc
                4:30AM liên hệ với Thành viên qua email, tin nhắn, số điện thoại
                hoặc các phương tiện khác;
              </Text>
              <Text>
                • Phân tích, nghiên cứu hành vi của Thành viên để cải thiện
                chương trình/thử thách của 4:30AM và/hoặc để cải thiện trải
                nghiệm của Thành viên;
              </Text>
              <Text>
                • Đáp ứng các thủ tục pháp lý hoặc theo quy định của pháp luật
                hiện hành, và các yêu cầu của cơ quan nhà nước có thẩm quyền;
              </Text>
              <Text>
                • Cung cấp cho Thành viên thông tin mới nhất trên trang web của
                4:30AM, thực hiện các khảo sát Thành viên, các hoạt động truyền
                thông liên quan đến các chương trình/hoạt động/đối tác của
                4:30AM;
              </Text>
              <Text>
                • Bất kỳ mục đích nào khác nhằm liên quan đến chương trình/hoạt
                động của 4:30AM vụ phù hợp với quy định của pháp luật.
              </Text>
            </Stack>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              4. Phương thức để thành viên quản lý, chỉnh sửa thông tin và cơ
              chế khiếu nại các vấn đề liên quan đến thông tin cá nhân
            </Text>
            <Stack>
              <Text fontWeight={'700'}>
                - Kiểm tra, cập nhật, điều chỉnh hay cung cấp thông tin cá nhân
              </Text>
              <Text>
                Thành viên có quyền kiểm tra, cập nhật, điều chỉnh thông tin cá
                nhân của mình bằng cách đăng nhập vào tài khoản và tự kiểm tra
                và cập nhật các thông tin cá nhân. Thành viên có quyền yêu cầu
                4:30AM kiểm tra, cập nhật, điều chỉnh hay cung cấp bản sao thông
                tin cá nhân của mình bằng cách nhắn tin trên Fanpage của 4:30AM
                hoặc gửi yêu cầu đến email info@430sang.com.
              </Text>
            </Stack>
            <Stack>
              <Text fontWeight={'700'}>
                - Rút lại sự đồng ý đối với việc thu thập, xử lý, sử dụng và
                tiết lộ thông tin cá nhân
              </Text>
              <Text>
                Thành viên có quyền rút lại sự đồng ý cho 4:30AM thu thập, xử
                lý, sử dụng và tiết lộ thông tin cá nhân mà Thành viên đã đưa ra
                trước đó bằng cách gửi yêu cầu cho 4:30AM qua email
                info@430sang.com. Thành viên cần lưu ý rằng việc rút lại sự đồng
                ý này có thể sẽ làm ảnh hưởng đến quan hệ hiện tại giữa Thành
                viên và 4:30AM, bao gồm nhưng không giới hạn ở việc 4:30AM cần
                xóa tài khoản của Thành viên.
              </Text>
            </Stack>
            <Stack>
              <Text fontWeight={'700'}>
                - Khiếu nại các vấn đề liên quan đến thông tin cá nhân
              </Text>
              <Text>
                Khi có thắc mắc hay khiếu nại về vấn đề thu thập, xử lý, sử dụng
                và tiết lộ thông tin cá nhân trên trang web của 4:30AM, Thành
                viên có quyền yêu cầu xử lý thắc mắc/khiếu nại trực tiếp qua tin
                nhắn trên Fanpage 4:30AM hoặc gửi thắc mắc/khiếu nại đến email
                info@430sang.com. 4:30AM sẽ nỗ lực và hỗ trợ giải quyết khiếu
                nại của Thành viên trong vòng 48 giờ kể từ thời điểm tiếp nhận
                các yêu cầu của Thành viên.
              </Text>
            </Stack>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              5. Thời gian lưu trữ, bảo vệ và tiết lộ thông tin
            </Text>
            <Text>
              Thông tin cá nhân của Thành viên sẽ được lưu trữ cho đến khi việc
              lưu trữ thông tin không còn cần thiết với hoạt động của 4:30AM,
              hoặc khi Thành viên có yêu cầu hủy bỏ/rút lại sự đồng ý cho 4:30Am
              xử lý thông tin, hoặc thời điểm khác theo quy định pháp luật.
            </Text>
            <Text>
              4:30AM thực hiện các biện pháp bảo vệ thông tin cá nhân của Thành
              viên khỏi bị đánh cắp, tiết lộ, sử dụng trái phép, thay đổi hay
              phá hủy trái phép bằng cách lưu trữ thông tin cá nhân theo các quy
              định 4:30AM thiết lập.
            </Text>
            <Text>
              4:30AM sẽ nỗ lực một cách tốt nhất để bảo vệ thông tin Thành viên
              theo Chính sách bảo mật này và theo quy định pháp luật. Trong
              trường hợp, 4:30AM phát hiện các thông tin của Thành viên bị tiết
              lộ trái phép bởi hoạt động tin tặc với ý đồ xấu mà không xuất phát
              từ lỗi cố ý trong trách nhiệm bảo mật của 4:30AM, 4:30AM có trách
              nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý và
              thông báo về việc thông tin bị tiết lộ trái phép cho Thành viên.
            </Text>
            <Text>
              Thành viên không chia sẻ các thông tin liên quan đến việc đăng
              nhập như tên đăng nhập, mật khẩu, email khôi phục tài khoản,… của
              Thành viên với bất cứ người nào khác và có các biện pháp bảo vệ
              các thông tin này. 4:30AM sẽ không chịu trách nhiệm khi có sự rò
              rỉ thông tin của Thành viên xuất phát từ việc Thành viên không tự
              áp dụng các biện pháp bảo mật thông tin của mình
            </Text>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              6. Thay đổi chính sách
            </Text>
            <Text>
              Chính sách này có thể được 4:30AM có thể cập nhật theo nhu cầu
              hoặc theo yêu cầu của pháp luật. Khi có sự thay đổi chính sách,
              4:30AM sẽ thông báo trên trang web của 4:30AM và Facebook Page
              cùng với Chính sách bảo mật được cập nhật.
            </Text>

            <Text fontWeight={'700'}>
              Chính sách bảo mật này có hiệu lực từ ngày 26/12/2021.
            </Text>
          </Stack>
        </Box>
      </Box>
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
      {renderContent()}
      <Footer mt={['-480px', '-200px']} />
    </Box>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth?.isAuthenticated,
})

export default connect(mapStateToProps, {showModal})(Policy)
