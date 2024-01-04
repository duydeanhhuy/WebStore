import './HeaderComponent.scss'
import {useState} from 'react'
const HeaderComponent = () => {
    const [word,setWord] = useState("")
    const handleTypeSearch = (event) => {
        event.preventDefault();
        setWord(event.target.value)
    }
    return (
        <>  
            <div className="header-container col-12">
                <div className="header-left col-2">
                    <span className='titleBrand col-12'>PurchaseSoEasy</span>
                </div>
                <div className="header-center col-6">
                    <div className='Search col-12'>
                        <input className='BtnSearch col-10' placeholder = "Search"
                            value={word}
                            onChange={(e)=>handleTypeSearch(e)}
                        />
                        <div className='btnClickSearch col-2'>
                            <button className='titleSearch col-12'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                &nbsp;
                                <span>Tìm kiếm</span>
                            </button>
                        </div>
                    </div>
                    <div className='title-under'>
                        {/* <div className='product-suggest'>trái cây</div>
                        <div className='product-suggest'>thịt,trứng</div>
                        <div className='product-suggest'>rau củ quả</div>
                        <div className='product-suggest'>sữa,bơ,phô mai</div>
                        <div className='product-suggest'>hải sản</div>
                        <div className='product-suggest'>gạo, mì ăn liền</div>
                        <div className='product-suggest'>đồ uống, bia rượu</div>
                        <div className='product-suggest'>bánh kẹo</div> */}
                    </div>
                </div>
                <div className="header-right col-4">
                    <div className="user col-8">
                           
                        <div className='LoginOrRegister'>
                            <i className="fa-regular fa-user"></i>
                            
                        </div>
                        <div className='account'>
                            <span>Đăng nhập / Đăng ký</span>
                            <span className="account-user">
                                Tài khoản   
                                <i className="fa-solid fa-caret-down"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div className="Cart col-4">
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <span className="title">Giỏ hàng</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderComponent