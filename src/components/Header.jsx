import React from 'react'

const imgLogo = require('../images/header/logo.png')

const Header = () =>
    <div className='header-container'>
        <h1 className='header-h1'>EATBOX</h1>
        <img className='header-image-logo' src={imgLogo}/>
    </div>

export default Header