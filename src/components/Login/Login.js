import React, { useState } from 'react'
import './Login.css';
import RegisterModal from './RegisterModal';
import { useDispatch } from "react-redux";
import { login } from '../../features/userSlice'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerModal, setRegisterModal] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "password") {
            setPassword(e.target.value);
        }
    }


    const showRegisterModal = () => {
        setRegisterModal((prevState) => !prevState)
    }

    const handleLogin = (email, uid, name, photoUrl) => {
        dispatch(login({
            email: email,
            uid: uid,
            displayName: name,
            photoUrl: photoUrl
        }))
    }
    const loginToApp = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="login">
            <img 
                src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                alt=""
            />

            <form>
                <input 
                    onChange={handleChange} 
                    value={email} 
                    type="Email" 
                    placeholder="Email" 
                    id="email" 
                />
                <input 
                    onChange={handleChange} 
                    value={password} 
                    type="password" 
                    placeholder="Password" 
                    id="password" 
                />
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a Member?{" "} 
                <span className='login__register' onClick={showRegisterModal}>
                    Register Now
                </span>
            </p>
            {registerModal ? <RegisterModal handleLogin={handleLogin} showModal={showRegisterModal} /> : ""}
        </div>
    )
}

export default Login
