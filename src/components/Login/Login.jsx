import React, { useState } from 'react'
import './Login.css'
import walmartLogo from '../../assets/images/walmartLogo.png'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className='rs-login-bg'></div>
            <section className='rs-login-c rs-font-lato'>
                <div className='rs-form-container'>
                    <form onSubmit={ handleSubmit } className='rs-form'>
                        <div className='rs-flex rs-justify-center'>
                            <img src={ walmartLogo } alt="Logo Walmart" className='rs-logo rs-mb-20' />
                        </div>

                        <div className='rs-text-center rs-mb-30'>
                            <p className='rs-font-18 rs-content-600'>Login to Walmart Reccomender System</p>
                        </div>

                        <div>
                            <input type="text" id="username" className='rs-form-input' placeholder=' ' autoComplete='off' required onChange={ (e) => setUsername(e.target.value) } />
                            <label htmlFor='username' className='rs-form-label'>Username</label>
                        </div>

                        <div>
                            <input type="password" id='password' className='rs-form-input' placeholder=' ' required onChange={ (e) => setPassword(e.target.value) } />
                            <label htmlFor='password' className='rs-form-label'>Password</label>
                        </div>

                        <input type="submit" value="Login" className='rs-login-button rs-font-lato' />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login
