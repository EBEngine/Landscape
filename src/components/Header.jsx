import React, {Component} from 'react'

const imgLogo = require('../images/header/logo.png')

const Header = () =>
    <div>
        <h1 className='header-h1'>EATBOX</h1>
        <img className='header-image-logo' src={imgLogo}/>
    </div>

export default Header