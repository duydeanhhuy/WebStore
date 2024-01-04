import React, { Component } from 'react'
import Slider from 'react-slick'
import './SliderComponent.scss'
const SliderComponent = ({arrImages}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
  return (
    <div className='Sliderrr'>
      <Slider {...settings}>
        {arrImages.map((image, index) => {
           return (
             <img src={image} alt='slider' />
           )
         })}
      </Slider>
    </div>
  )
}
export default SliderComponent
