import React from 'react';
import '../styles/Header.scss';


function Header (){

    return(
        <>
        <div className="header">
            <h1 className="header-logo">Header</h1>
            <div className="header-right">
                <span className="header-right_icon">Need Help?</span>
                <span className="header-right_icon">FR</span>
                <span className="header-right_icon">Login</span>
            </div>
        </div>
        </>
    )
}

export default Header;