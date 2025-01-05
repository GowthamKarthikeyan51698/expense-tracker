import React, { useState } from 'react'

export default function Login() {
    const [login, setLogin] = useState({
        user_id: '',
        user_password: '',
        confirm_password: ''
    })
    const [type, setType] = useState("");
    const setInput = (e) => {
        const {name, value} = e.target
        console.log(name);
        console.log(value);
        setLogin({...login, [name]: value})
    }

    const setFieldMode = (e) => {
        if(e == 'Register'){
            setType("Register")
        } else if(e == 'SignIn'){
            setType("Login")
        }
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
                GK Expense
            </h4>
            <div className='loginBox'>
                <div className='image-section'>
                    <img src="/login-banner.jpg" alt="mini banner" />
                </div>
                <div className='login-data'>
                    <h3 className='text-center'>
                        { type == 'Login' ? 'Sign In' : 'Sign Up' }
                    </h3>
                    <div className='mb-2'>
                        <input type="text" className='input-field input-width' value={login.user_id} placeholder='Enter Email Address' name="user_id" onChange={(e) => setInput(e)}/>
                    </div>
                    <div className={type == 'Register' ? 'mb-2' : ''}>
                        <input type="password" className='input-field input-width' value={login.user_password} placeholder='Enter Password' name="user_password" onChange={(e) => setInput(e)}/>
                    </div>
                    {
                        type == 'Register' &&  
                        <div>
                            <input type="password" className='input-field input-width' value={login.confirm_password} placeholder='Enter Confirm Password' name="confirm_password" onChange={(e) => setInput(e)}/>
                        </div>
                    }
                    {
                        type == 'Login' && 
                        <div className='text-primary fs-12 text-right pointer'>Forgot Password?</div>
                    }
                    <div className='text-center mt-2'>
                        <button className='btn btn-success' onClick={submitLogin}>
                            { type == 'Login' ? 'Login' : 'Sign Up' }
                        </button>
                    </div>
                    {
                        type == 'Register' ? 
                        <div className='mt-2 text-center'>
                            Do you have a login? <a className='pointer' onClick={() => setFieldMode("SignIn")}>click here</a>
                        </div> : 
                        <div className='mt-2 text-center'>
                            New User? <a className='pointer' onClick={() => setFieldMode("Register")}>click here</a>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
