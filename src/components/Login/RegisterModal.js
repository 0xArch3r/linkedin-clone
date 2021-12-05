import React, { useState } from 'react'
import './RegisterModal.css'
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


function RegisterModal({ showModal, handleLogin }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e) => {
        if (e.target.id === "email") {
            setEmail(e.target.value);
        } 
        else if (e.target.id === "name") {
            setName(e.target.value);
        }
        else if (e.target.id === "password") {
            setPassword(e.target.value);
        }
        else if (e.target.id === "photoUrl") {
            setPhotoUrl(e.target.value);
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();
        // TODO: Add parameter checking for user input
        if (!name) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        if (!email) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (!password) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                console.log(auth.currentUser)
                updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photoUrl,
                }).then(() => {
                    handleLogin(userCredential.user.email, userCredential.user.uid, name, photoUrl)
                })
                .catch((error) => console.log(error))
            }).catch((error) => {
                console.log(error)
            })
    }



    return (
        <div>
            <div className="modal">
                <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                    alt=""
                />
                <p>Make the most of your professional life</p>
                <form>
                    <div className="form__body">
                        <h4>Full Name</h4>
                        <input id="name" value={name} onChange={handleChange} type="text"/>
                        {nameError ? <h5>Please enter a full name</h5> : ""}
                        <h4>Photo Url</h4>
                        <input id="photoUrl" value={photoUrl} onChange={handleChange} type="text"/>
                        <h4>Email</h4>
                        <input id="email" value={email} onChange={handleChange} type="text"/>
                        {emailError ? <h5>Please enter a valid email</h5> : ""}
                        <h4>Password</h4>
                        <input id="password" value={password} onChange={handleChange} type="password"/>
                        {passwordError ? <h5>Please enter a Password</h5> : ""}
                        <p>By clicking Register, you agree to the LinkedIn User Agreement Privacy Policy and Cookie Policy.</p>
                    </div>
                    <div className="form__footer">
                        <button onClick={handleRegister}>Register</button>
                        <button onClick={showModal}>Cancel</button>
                    </div>
                </ form>
            </div>
            <div className="backdrop"></div>
        </div>
    )
}

export default RegisterModal
