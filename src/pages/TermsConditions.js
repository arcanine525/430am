import {Box, Heading, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {connect} from 'react-redux'
import {showModal} from '../store/actions/modal'
import Footer from '../components/Footer'
import {fSizes} from '../theme/spacing'
import MiniHeader from '../components/MiniHeader'
import tdsSx from '../theme/tdsSx'

const TermsConditions = () => {
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
              Điều khoản sử dụng{' '}
            </Heading>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              1. Giới thiệu
            </Text>
            <Text fontSize={fSizes.b18}>
              Nhằm hướng tới việc xây dựng hệ thống 4:30 Sáng, hay còn gọi là
              4:30AM an toàn, chuyên nghiệp để phục vụ cộng đồng thành viên của
              4:30AM, những người đăng ký tham gia Thử thách luyện tập thói quen
              ngủ đủ - dậy sớm và các hoạt động đi hỗ trợ cho Thử thách, (sau
              đây gọi chung là "Thành viên"), đồng thời nhằm giúp Thành Viên
              hiểu rõ trách nhiệm của Thành viên và trách nhiệm của chúng tôi
              trong quá trình Thành viên sử dụng trang web này, chúng tôi xin
              đăng tải Điều khoản sử dụng với các điều khoản và điều kiện dưới
              đây.
            </Text>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              2. Đăng ký tài khoản
            </Text>
            <Text fontSize={fSizes.b18}>
              Thành viên có trách nhiệm bảo mật đối với tên đăng nhập và mật
              khẩu đăng nhập trên trang web này để tránh sự xâm nhập vào tài
              khoản không mong muốn từ một bên thứ ba. Chúng tôi không chịu
              trách nhiệm đối với bất kỳ mất mát nào của Thành viên hay của một
              bên khác phát sinh từ việc Thành viên không thực hiện nghĩa vụ bảo
              mật này.
            </Text>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              3. Quyền sử hữu trí tuệ của 4:30AM
            </Text>
            <Text fontSize={fSizes.b18}>
              4:30AM hoặc bên cấp quyền sử dụng cho 4:30AM có quyền sở hữu trí
              tuệ đối với các nội dung trên trang web 4:30AM, bao gồm nhưng
              không giới hạn ở các mô tả bằng chữ, nhãn hiệu chữ và nhãn hiệu
              hình ảnh 4:30AM, thiết kế và bài trí trang web, thiết kế mỹ thuật,
              thiết kế các nút bấm, giao diện, các hình ảnh, mã code, video clip
              và tài sản trí tuệ khác được bảo vệ theo quy định của pháp luật về
              sở hữu trí tuệ.
            </Text>
            <Text fontSize={fSizes.b18}>
              Thành viên cam kết sẽ tuân thủ các quy định của pháp luật về sở
              hữu trí tuệ đối với các tài sản nói trên, bao gồm và không giới
              hạn việc Thành viên sẽ không thực hiện việc sao chép, sửa đổi,
              phân phối, tạo tài sản trí tuệ phái sinh từ các nội dung của
              4:30AM, tạo ra trang web mới bằng cách sao chép một phần hoặc toàn
              bộ trang web của 4:30AM khi chưa được 4:30AM chấp thuận hay lạm
              dụng trang web của 4:30AM vì mục đích bất hợp pháp.
            </Text>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              4. Quyền truy cập và sử dụng trang web WEB
            </Text>
            <Text>
              4:30AM đồng ý cho Thành viên truy cập và sử dụng trang các tính
              năng trên trang web của 4:30AM. Tuy nhiên, trong mọi trường hợp,
              Thành viên không được sửa đổi một phần hay toàn bộ trang web của
              4:30AM hay can thiệp vào việc 4:30AM vận hành trang web mà không
              có sự cho phép của 4:30AM. Các hành vi vi phạm pháp luật, bao gồm
              nhưng không giới hạn ở việc đánh cắp hay phá hủy thông tin cá nhân
              hoặc thông tin khác của Thành viên trên hệ thống của 4:30AM là các
              hành vi bị tuyệt đối nghiêm cấm. Thành viên cam kết rằng sẽ tuyệt
              đối tuân thủ các quy định pháp luật trong quá trình sử dụng trang
              web của 4:30AM. Thành viên công nhận rằng 4:30AM có quyền thực thi
              các biện pháp cần thiết để ngăn chặn hành vi vi phạm nói trên, như
              từ chối cung cấp sản phẩm/dịch vụ, xóa bỏ hay vô hiệu hóa tài
              khoản Thành viên…
            </Text>
            <Text fontSize={fSizes.b18}>
              Thành viên đồng ý không gây bất kỳ phương hại hại nào và bồi
              thường, bảo vệ cho 4:30AM và cộng đồng của 4:30AM, và bất cứ bên
              thứ ba liên quan tới trang web đối với tất cả các thiệt hại, chi
              phí, bao gồm nhưng không giới hạn lệ phí cho luật sư và lệ phí tòa
              án, do hành vi vi phạm của Thành viên gây ra.
            </Text>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              5. Liên kết đến bên thứ ba
            </Text>
            <Text fontSize={fSizes.b18}>
              Trên trang web của 4:30AM có thể chứa các đường dẫn liên kết đến
              trang web của một bên thứ ba. Chúng tôi sẽ xem xét kỹ lưỡng trước
              khi đưa đường dẫn liên kết của bên thứ ba lên; tuy nhiên, 4:30Am
              không chịu trách nhiệm đối với các nội dung trên trang web của bên
              thứ ba cũng như không chịu trách nhiệm đối với mọi thiệt hại/mất
              mát phát sinh khi Thành viên sử dụng các trang web này.
            </Text>
            <Text fontSize={fSizes.b18}>
              Thành viên có thể tạo hyperlink để liên kết đến trang web của
              4:30AM nếu được 4:30AM cho phép bằng văn bản, với điều kiện việc
              tạo liên kết này không nhằm mục đích phỉ báng, vu khống, xuyên tạc
              hay mục đích khác mà 4:30AM cho rằng không phù hợp với định hướng
              phát triển trang web của mình. Thành viên công nhận rằng 4:30AM có
              toàn quyền chấm dứt sự cho phép liên kết này tại bất kỳ thời điểm
              nào.
            </Text>

            <Text fontWeight={'700'} fontSize={fSizes.b18}>
              6. Đánh giá và góp ý{' '}
            </Text>
            <Text fontSize={fSizes.b18}>
              Thành viên có quyền gửi các góp ý cho 4:30AM thông qua các tính
              năng trên trang web hoặc qua email liên hệ của chúng tôi.
            </Text>
            <Text fontSize={fSizes.b18}>
              Thành viên cam kết sẽ không đăng tải hoặc gửi cho chúng tôi những
              nội dung như sau:
            </Text>
            <Stack>
              <Text>
                Thành viên cam kết sẽ không đăng tải hoặc gửi cho chúng tôi
                những nội dung như sau:
              </Text>
              <Text>
                - Chứa các mã độc có thể gây tổn hại đến việc vận hành, sử dụng
                trang web của 4:30AM hay việc sử dụng máy tính của Thành viên
                khác;
              </Text>
              <Text>
                - Xâm phạm đến quyền sở hữu trí tuệ của 4:30AM hay của tổ chức,
                cá nhân khác;
              </Text>
              <Text>
                - Chứa nội dung quảng cáo vì lợi ích của Thành viên hoặc một bên
                thứ ba khác; khác;
              </Text>
              <Text>
                - Tiết lộ bí mật nhà nước, phương hại đến độc lập, chủ quyền
                quốc gia, an ninh, quốc phòng;
              </Text>
              <Text>
                - Ngôn từ thiếu thẩm mỹ, trái với truyền thống lịch sử, văn hóa,
                đạo đức, thuần phong mỹ tục Việt Nam;
              </Text>
              <Text>
                - Gây ảnh hưởng xấu đến sự tôn nghiêm đối với Quốc kỳ, Quốc huy,
                Quốc ca, Đảng kỳ, anh hùng dân tộc, danh nhân văn hóa, lãnh tụ,
                lãnh đạo Đảng, Nhà nước;
              </Text>
              <Text>
                - Có tính chất kỳ thị dân tộc, phân biệt chủng tộc, xâm phạm tự
                do tín ngưỡng, tôn giáo, định kiến về giới, về người khuyết tật;
              </Text>
              <Text>
                - Vu khống, xuyên tạc, xúc phạm uy tín, danh dự, nhân phẩm của
                4:30AM hay tổ chức, cá nhân;
              </Text>
              <Text>
                - Sử dụng hình ảnh, lời nói, chữ viết của cá nhân khi chưa được
                cá nhân đó đồng ý, trừ trường hợp được pháp luật cho phép.
              </Text>
            </Stack>
            <Text>
              Thành viên đồng ý rằng, để chấm dứt việc hiển thị hay nhận được
              các nội dung trái với Điều khoản sử dụng nêu trên, 4:30AM có quyền
              chỉnh sửa, gỡ bỏ các nội dung Thành viên đăng tải/gửi cho 4:30AM
              và/hoặc xóa bỏ hay vô hiệu hóa tài khoản của Thành viên. Đồng
              thời, 4:30AM có quyền sử dụng tên của Thành viên và các nội dung
              mà Thành viên đăng tải hoặc gửi cho 4:30AM với mục đích quảng bá
              cho 4:30AM trên phương tiện thông tin đại chúng.
            </Text>
            <Text fontWeight={'700'}>7. Giới hạn trách nhiệm</Text>
            <Stack>
              <Text>
                Hiện nay, 4:30AM đang trong giai đoạn phát triển và thử nghiệm.
                4:30AM sẽ nỗ lực hết sức để đảm bảo chất lượng của trang web,
                tuy nhiên, sẽ có những giới hạn về nguồn lực hay các đặc thù của
                môi trường mạng khiến cho trang web của 4:30AM có thể sẽ không
                vận hành ở điều kiện lý tưởng. Do đó, trang web của 4:30AM có
                thể sẽ gặp phải một số vấn đề dưới đây:
              </Text>
              <Text>i. Gián đoạn khi Thành viên sử dụng trang web;</Text>
              <Text>
                ii. Các thông tin hiển thị trên trang web là có thể thay đổi
                theo hướng hoàn thiện hơn và cập nhật hơn cho phù hợp với điều
                kiện thực tế;
              </Text>
              <Text>
                iii. Các vấn đề khác phát sinh trong quá trình vận hành.
              </Text>
            </Stack>
            <Text>
              Qua việc sử dụng trang web của 4:30AM, Thành viên chấp nhận tất cả
              các khiếm khuyết hiện có và có thể xuất hiện của trang web.
            </Text>
            <Text fontWeight={'700'}>8. Chính sách bảo mật</Text>
            <Text>
              Vui lòng xem các điều khoản và điều kiện liên quan đến bảo mật
              thông tin cá nhân tại Chính sách Bảo mật của chúng tôi tại đây.
            </Text>
            <Text fontWeight={'700'}>
              9. Luật áp dụng & điều khoản giải quyết tranh chấp
            </Text>
            <Text>
              Thành viên công nhận và xác nhận rằng Điều khoản sử dụng này được
              coi là một thỏa thuận giữa Thành viên và 4:30AM, được giải thích
              và thực hiện dưới sự điều chỉnh bởi các quy định Pháp luật của
              nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Khi có tranh chấp xảy ra
              giữa Thành viên và 4:30AM liên quan đến Điều khoản sử dụng này,
              hai bên sẽ tiến hành thương lượng để giải quyết trên tinh thần
              thiện chí. Trong vòng 60 ngày kể từ ngày phát sinh tranh chấp, nếu
              các bên không tìm được giải pháp phù hợp thì một trong hai bên có
              quyền khởi kiện ra Tòa án nhân dân có thẩm quyền.
            </Text>
            <Text>
              Bất kỳ khiếu nại nào phát sinh từ điều khoản sử dụng này phải được
              thực hiện trong vòng 03 (ba) tháng kể từ ngày xảy ra vi phạm. Nếu
              vượt quá thời hạn nêu trên, Thành viên sẽ không có quyền khiếu
              nại. Đối với tranh chấp giữa Thành viên với Thành viên khác của
              4:30AM hoặc giữa Thành viên với 4:30AM, 4:30AM sẽ căn cứ vào các
              thông tin ghi nhận trên hệ thống để giải quyết. Quyết định của
              4:30AM là quyết định cuối cùng;
            </Text>
            <Text>
              Trong trường hợp một hoặc một số điều khoản trong điều khoản sử
              dụng này xung đột với các quy định của luật pháp và bị Tòa án
              tuyên là vô hiệu, điều khoản đó sẽ được chỉnh sửa cho phù hợp với
              quy định pháp luật hiện hành, và phần còn lại của vẫn giữ nguyên
              giá trị pháp lý.
            </Text>
            <Text fontWeight={'700'}>10. Điều chỉnh điều khoản sử dụng</Text>
            <Text>
              4:30AM có quyền sửa đổi, bổ sung, thay thế, chấm dứt hiệu lực của
              một phần hay toàn bộ Điều khoản sử dụng này tại bất kỳ thời điểm
              nào để phù hợp với định hướng phát triển của trang web mà không
              cần phải thông báo cho Thành viên. Thành viên có nghĩa vụ thường
              xuyên truy cập vào văn bản này trước khi đưa ra các quyết định căn
              cứ vào Điều khoản sử dụng. Thông qua việc tiếp tục sử dụng 4:30AM,
              Thành viên xác nhận đã đồng ý đối với những điều chỉnh đối với
              Điều khoản sử dụng nói trên.
            </Text>
            <Text fontWeight={'700'}>
              Điều khoản sử dụng này có hiệu lực kể từ ngày 29/12/2021.
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

export default connect(mapStateToProps, {showModal})(TermsConditions)
