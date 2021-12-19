import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../../components/Login/Login'

const LoginPage = (props) => {
    return (
        <div>
            {
                props.loginState ? <Navigate to='/recommender-system/main' /> : null
            }
            <Login Login={ props.Login } username = { props.username } SetName={ props.SetName } />
        </div>
    )
}

export default LoginPage
