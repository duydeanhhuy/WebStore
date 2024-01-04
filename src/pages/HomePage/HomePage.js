import React, { useState } from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import './HomePage.scss'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import Img1 from '../../assets/anh1.jpg'
import Img2 from '../../assets/anh2.jpg'
import Img3 from '../../assets/anh3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const HomePage = () => {
  // const arr = ['TV','Tủ lạnh','Nồi cơm','Mồi bàn']
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='homepage-container'>
      <div className='typeProduct'>
        {/* {arr.map((item,index)=>{
                                                                                    return (
                                                                                        <TypeProduct name={item} key={index}/>
                                                                                    )
                                                                                })} */}
        <div className='TrangChu'>
          Trang chủ
        </div>
        {/* <div className="AllType">Loại sản phẩm</div> */}
        <div className='dropdown'>
          <DropdownButton className='aaaa' id='dropdown-basic-button' title='Loại sản phẩm'>
            <Dropdown.Item href='/product/iPad'>
              iPad
            </Dropdown.Item>
            <Dropdown.Item href='/product/iPhone'>
              iPhone
            </Dropdown.Item>
            <Dropdown.Item href='/product/Samsung'>
              Samsung
            </Dropdown.Item>
            <Dropdown.Item href='/product/Xiaomi'>
              Xiaomi
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className='HomePage'>
        <SliderComponent arrImages={[Img1, Img2, Img3]} />
      </div>
      <div className='Card col-12'>
        <div className='product col-2'>
          <CardComponent/>
        </div>
        <div className='product col-2'>
          <CardComponent/>
        </div>
        <div className='product col-2'>
          <CardComponent/>
        </div>
        <div className='product col-2'>
          <CardComponent/>
        </div>
        <div className='product col-2'>
          <CardComponent/>
        </div>
      </div>
      <div className='Footer'>
        <FooterComponent/>
      </div>
    </div>
  )
}
export default HomePage
