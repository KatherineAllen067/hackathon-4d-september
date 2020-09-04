import React from 'react';
import '../styles/Header.scss';
import Logo from '../assets/icons/SkipLogo.png';
import Help from '../assets/icons/need-help.png';
import Ask from '../assets/icons/ask.png';
import Login from '../assets/icons/Login.png';


function Header (){

    return(
        <>
        <div className="header">
            <img src={Logo}  alt="Logo" className="header-logo"/>
            <div className="header-right">
                <img src={Help} alt="help" className="header-right_icon"/>
                <img src={Ask} alt="ask" className="header-right_icon--1"/>
                <img src={Login} alt="login" className="header-right_icon"/>
            </div>
        </div>
        </>
    )
}

export default Header;