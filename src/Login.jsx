import React, { useState } from 'react'

export default function Login() {
    const [login, setLogin] = useState({
        user_id: '',
        user_password: ''
    })
    const setInput = (e) => {
        const {name, value} = e.target
        console.log(name);
        console.log(value);
        setLogin({...login, [name]: value})
    }

    const submitLogin = () => {
        if(login.user_id == '' || login.user_password == ''){
            // https://fkhadra.github.io/react-toastify/installation

            // implement this toasted Functionality
        } else {
            fetch('http://localhost:3000/login',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(login)
                }
            ).then((res) => console.log(res))
            .then(() => {
                setLogin({
                    user_id: '',
                    user_password: ''
                })
            })
        }
    }
    return (
        <>
            <h4 className='app-title'>
                <img src="/money.png" className='me-2' width="30" alt="" />
                GK Expense Tracker
            </h4>
            <div className='loginBox'>
                <div className='image-section'>
                    <img src="/login-banner.jpg" alt="mini banner" />
                </div>
                <div className='login-data'>
                    <div className='mb-4'>
                        <input type="text" className='input-field input-width' value={login.user_id} placeholder='Enter Email Address' name="user_id" onChange={(e) => setInput(e)}/>
                    </div>
                    <div>
                        <input type="password" className='input-field input-width' value={login.user_password} placeholder='Enter Password' name="user_password" onChange={(e) => setInput(e)}/>
                    </div>
                    <div className='text-primary fs-12 text-right pointer'>Forgot Password?</div>
                    <div className='text-center mt-3'>
                        <button className='btn btn-success' onClick={submitLogin}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
