import { useState } from 'react'
import './SignInPage.scss'
import logoInput from '../../assets/logo-login.png'
const SingInPage = ( )=> {
    const [typeInput,setTypeInput] = useState(true)
    const [showPass,setShowPass] = useState(false)
    const [isRegister,setIsRegister] = useState(false)
    const [showPassRegister,setShowPassRegister] = useState(false)
    const changeTypeInput = () => {
        setTypeInput(!typeInput)
    }
    const handleClickShow = () =>{
        setShowPass(!showPass)
    }
    const handleRegister = () => {
        setIsRegister(!isRegister)
    }
    const handleSetPasswordRegister = () =>{
        setShowPassRegister(!showPassRegister)
    }
    // const handleBackRegister = () =>{
    //     setTypeInput(true)

    // }
    return (
        <>
            <div className="Sign-in-container">
                <div className="content-left">
                    <div className='wrapper-form'>
                        <div className='form-input-sign-in'>
                        {typeInput === true ? 
                            <>      
                                {/* Đăng nhập bằng số điện thoại */}
                                    <div className='hello'>Xin chào,</div>
                                    <div className='question'>Đăng nhập hoặc tạo tài khoản</div>
                                    <div className='sdt'>
                                        <input className='inputSDT' type="tel" name='tel' maxLength={10} placeholder='Số điện thoại'/>
                                    </div>
                                    <div className='btn-signIn'>
                                        <button className='Continue'>Tiếp tục</button>
                                    </div>
                                
                            </>
                            : isRegister === false ?
                                <>
                                    {/* Đăng nhập bằng email */}
                                    <div className='titleForm'>
                                        <span className='t1'>Đăng nhập bằng email</span>
                                        <span className='t2'>Nhập email và mật khẩu tài khoản Tiki</span>
                                    </div>
                                    <div className='formInput'>
                                        <input className='email' type='email' placeholder='acb@email.com'/>
                                        <input className='password' type={showPass? "text" : "password"} placeholder='Mật khẩu'/>
                                        <span className='showpass' onClick={()=>handleClickShow()}>
                                            {showPass ? "Ẩn" : "Hiện"}
                                        </span>
                                    </div>
                                    <div className='btn-signIn'>
                                            <button className='Continue'>Đăng nhập</button>
                                    </div>
                                </>
                                :
                                <> 
                                    <div className='back' onClick={()=>handleRegister()}><i class="fa-solid fa-chevron-left"></i></div>
                                    <div className='titleForm'>
                                        <span className='t1'>Đăng ký</span>
                                    </div>
                                    <div>
                                    {/* Register */}
                                    
                                        <div className='formInput'>
                                        <input className='email' type='email' placeholder='acb@email.com'/>
                                        <input className='password-register' type={showPass? "text" : "password"} placeholder='Mật khẩu'/>
                                        <span className='showpass' onClick={()=>handleClickShow()}>
                                            {showPass ? "Ẩn" : "Hiện"}
                                        </span>
                                        <input className='passwordAgain' type={showPassRegister? "text" : "password"} placeholder='Nhập lại mật khẩu'/>
                                        <span className='showpassAgain' onClick={()=>handleSetPasswordRegister()}>
                                            {showPass ? "Ẩn" : "Hiện"}
                                        </span>
                                        </div>
                                        <div className='btn-signIn'>
                                                <button className='Continue'>Đăng ký</button>
                                        </div>
                                    </div>
                                </>
                        }
                        
                        
                        <div className='form-input-register'>

                        </div>
                    </div>
                    <div>
                        {typeInput === true && isRegister === false ? 
                            <div className="textChangeInput" onClick={()=>changeTypeInput()}>Đăng nhập bằng email</div>
                            : isRegister === false ?
                            <div className="textChangeInput" onClick={()=>changeTypeInput()}>Đăng nhập bằng số điện thoại</div>
                            :
                            <div style={{"marginTop":"5px"}}>Bạn đã có tài khoản ? 
                                <span className="textChangeInput" style={{"textDecoration":"underline"}} onClick={handleRegister} >Click here</span>
                            </div>
                        }
                    </div>
                    <hr style={{"marginTop":"30px"}}></hr>
                    {typeInput === true ? 
                        <>  
                            <div className='titleOptions'>
                                <span>Hoặc tiếp tục bằng</span>
                            </div>
                            <div className='someOptions'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-google-plus"></i>
                            </div>
                            <div className='Note'>
                                Bằng việc tiếp tục, bạn đã đọc và đồng ý với <span style={{"textDecoration":"underline"}}>điều khoản sử dụng </span>&nbsp;và <span style={{"textDecoration":"underline"}}>Chính sách bảo mật thông tin cá nhân</span> của Tiki
                            </div>
                        </>
                        :
                            isRegister === false ?
                        <>  
                            <div className='forgot-pass'>
                                <div className='forgot'>Quên mật khẩu?</div>
                                <div className='create-or-not'>Chưa có tài khoản? &nbsp;&nbsp;<span onClick={()=>handleRegister()}>Tạo tài khoản</span></div> 
                            </div>
                        </>
                        :
                            <></>
                        }
                    </div>
                    
                </div>
                <div className="content-right">
                    <img src={logoInput}/>
                </div>
            </div>
        </>
    )
}

export default SingInPage