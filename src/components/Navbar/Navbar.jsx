import React from 'react'
import './Navbar.css'
import walmartLogo from '../../assets/images/walmartLogo2.png'

const Navbar = (props) => {
    return (
        <div className='rs-navbar-container'>
            <div>
                <img src={ walmartLogo } alt="Walmart Logo" className='rs-pointer' />
            </div>
            <div className='rs-font-lato rs-navbar-item-logout'>
                <div className='rs-logout-button' onClick={ props.LogOut }>
                    Sign Out
                </div>
            </div>
        </div>
    )
}

export default Navbar
