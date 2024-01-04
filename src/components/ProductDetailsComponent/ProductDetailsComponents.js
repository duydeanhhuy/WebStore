import './ProductDetailsComponent.scss'
import img1 from '../../assets/Product/iphone15problack1.jpg'
import img2 from '../../assets/Product/iphone15problack2.jpg'
import img3 from '../../assets/Product/iphone15problack3.jpg'
import img4 from '../../assets/Product/iphone15problack4.jpg'
import img5 from '../../assets/Product/iphone15protem203.jpg'
import { useState } from 'react'
const ProductDetailsComponent = () => {
    let arrImg = [img1,img2,img3,img4,img5]
    const [quantity,setQuantity] = useState(1)
    const [disabledQ,setDisabledQ] = useState(false)
    const handleQuantity = () => {
        
    }
    const handleChangeQuantity = (id) =>{
        if(quantity === 1){
            setDisabledQ(true)
        }else if(quantity > 1){
            setDisabledQ(false)
        }
        if(id === 'plus'){
            setQuantity((prev) => prev + 1)
        }else{
            setQuantity((prev) => prev - 1)
        }
    }
    return (
        <>
            <div className='product-details-container'>
                <div className='content-left'>
                    <div className='img-up'>
                        <img src={img1} />
                    </div>
                    <div className='img-down'>
                        {arrImg.map((item,index)=>{
                        return (
                            <div key={index} className='img-product'>
                                <img src={item}/>
                            </div>
                        )
                    })}
                    </div>
                    
                </div>
                <div className='content-right'>
                    <div className='nameP'>Điện thoại iPhone 15 Pro Max 256GB</div>
                    <div className='evaluate'>
                        <div className='stars'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className='nextStars'>
                            <span>| Đã bán 1000+ </span>
                        </div>
                    </div>
                    <div className='price'>
                        200.000
                    </div>
                    <div className='addressP'>
                        <span className='title-address'>Giao đến &nbsp;</span>
                        <span className='address'>Q.1 ,P.Bến Nghé, Hồ Chí Minh</span> 
                        <i class="fa-solid fa-minus"></i>
                        <span className='changeAddress'>Đổi địa chỉ</span>
                    </div>
                    <div className='quantityP'>
                        <span className='titleQuantity'>Số lượng</span>
                        <span className='btn-group'>
                            <button className='form-control plus' onClick={()=>handleChangeQuantity("minus")}
                                disabled={disabledQ === true ? true : false}
                                title='Quantity can not be smaller than 0'
                            >
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input className='form-control btnQ' value={quantity} onChange={()=>handleQuantity()}>
                            </input>
                            <button className='form-control plus' onClick={()=>handleChangeQuantity("plus")}>
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </span>
                    </div>
                    <hr style={{"margin":"0 10px"}}/>
                    <div className='btn-Purchase'>
                        <button className='form-control choose'>Chọn mua</button>
                        <button className='form-control otherOption'>
                            <span>Mua trước lãi sau</span>
                            <span>Lãi suất 0%</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsComponent