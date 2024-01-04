import './CardComponent.scss'
import Iphone15ProMax from '../../assets/Product/iphone15Promax.jpg'
import logo from '../../assets/logoOfficial.png'
const CardComponent = () => {
  return (
    <div className='Card-product'>
      <div className='img-product'>
        <img className='official-logo' src={logo} />
        <img className='image' src={Iphone15ProMax} />
      </div>
      <div className='Name-product'>
        iPhone 15 Pro Max 512GB
      </div>
      <div className='report-product'>
        <span>4.96 <i className='fa-solid fa-star'></i></span>
        <span>| Đã bán 1000+</span>
      </div>
      <div className='Price-product'>
        <span className='price'>19.000.000 ₫</span>
        <span className='discount'>-5%</span>
      </div>
    </div>
  )
}
export default CardComponent
