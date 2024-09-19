import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Sign up');

    return (
        <div className='loginPopup'>
            <form className='loginPopupContainer' action="">
                <div className="loginPopupTitle">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="loginPopupInput">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

                    <input type="email" name="" placeholder='Your Email' id="" required />
                    <input type="password" placeholder='Password' required name="" id="" />
                </div>
                <button>{currentState === "Sign up" ? "Create account" : "Login"}</button>
                <div className="loginPopupCondition">
                    <input type="checkbox" required />
                    <p>By continuing , I agree to the terms and conditions</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account ?<span onClick={()=>setCurrentState("Sign up")}>Click Here</span></p>
                    : <p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
                }

            </form>
        </div>
    );
}

export default LoginPopup;
