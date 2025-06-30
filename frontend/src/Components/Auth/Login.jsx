import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [authShow,setAuthShow] = useState(true)
    return (
        <>
        {authShow && <div className='LoginMainDiv'>
            <div className="Loginleft">
                <div className="CompanyTitle">
                    Banke Bihari Group
                </div>
                <div className="logintitle">
                    Login to Your Account
                </div>
                <div className="loginDetail">
                    <input type="email" placeholder='Email' /> <br />
                    <input type="password" placeholder='Password' /> <br />
                    <button>Submit</button>
                </div>
            </div>
            <div className="Loginright">
                <div className="newhere">New Here?</div>
                <div className="loginsubtitle">Sign Up and discover a great <br /> amount of new oppotunities!</div>
                <div className="signup-btn"><button onClick={()=>setAuthShow(false)}>Sign Up</button></div>
            </div>
        </div>}
        {!authShow && <div className="SingupMainDiv">
            <div className="signupleft">
                <div className="Signuptitle">
                    Hello Friends!
                </div>
                <div className="singup-slogon">
                    Enter your personal details <br /> and start journey with us 
                </div>
                <div className="sign-btn">
                    <button onClick={()=>setAuthShow(true)}>Sign In</button>
                </div>
            </div>
            <div className="signupRight">
                <div className="Signuptitle-2">Create Your Account</div>
                <div className="signupDetail">
                    <input type="email" placeholder='Email' /> <br />
                    <input type="text" placeholder='First Name' /> <br />
                    <input type="text" placeholder='Last Name' /> <br />
                    <input type="password" placeholder='Password' /> <br />
                    <input type="password" placeholder='Confirm Password' /> <br />
                    <button>Submit</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Login