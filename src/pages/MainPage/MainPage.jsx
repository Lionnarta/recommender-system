import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import RecommendedSystem from '../../components/RecommendedSystem/RecommendedSystem'
import './MainPage.css'

const MainPage = (props) => {
    return (
        <div>
            {
                !props.loginState ? <Navigate to='/recommender-system' /> : null
            }
            <Navbar LogOut={ props.LogOut } />
            <div className='rs-h-80'></div>
            <RecommendedSystem username = { props.username } loginState={ props.loginState } />
        </div>
    )
}

export default MainPage
