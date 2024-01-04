import './FooterComponent.scss'
import Gojek from '../../assets/gojeklogo.jpg'
const FooterComponent = () => {
  return (
    <div className='footer-container col-12'>
      <div className='Support col-3'>
        <div className='titleSupport'>
          Hỗ trợ khách hàng
        </div>
        <div className='NoteSupport'>
          <span>Hotline: 1900-0000</span>
          <span>Các câu hỏi thường gặp</span>
          <span>Gửi yêu cầu hỗ trợ</span>
          <span>Hỗ trợ khách hàng: hotro@gmail.com</span>
        </div>
      </div>
      <div className='StoreAbt col-3'>
        <div className='titleStore'>
          Về cửa hàng
        </div>
        <div className='NoteStore'>
          <span>Giới thiệu cửa hàng</span>
          <span>Chính sách bảo mật thông tin</span>
          <span>Điều khoản sử dụng</span>
          <span>Điều kiện vận chuyển</span>
        </div>
      </div>
      <div className='Cooperate col-3'>
        <div className='tittleCooperate'>
          Hợp tác và liên kết
        </div>
        <div className='NoteCoop'>
          <span>Quy chế hoạt động sàn GDTMĐT</span>
          <span>Bán hàng cùng Cửa hàng di động</span>
          <div className='Service'>
            <i className='fa-brands fa-r-project'></i>
            <i className='fa-solid fa-diagram-project'></i>
            <i className='fa-solid fa-building-ngo'></i>
          </div>
        </div>
      </div>
      <div className='ContactUs col-3'>
        <div className='titleContact'>
          Kết nối với chúng tôi
        </div>
        <div className='logoContact'>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-youtube'></i>
          <i className='fa-brands fa-google-plus'></i>
        </div>
      </div>
    </div>
  )
}
export default FooterComponent
