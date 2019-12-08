import React from 'react';
import header_logo from "./images/fluent-logo-header.png";

function Header() {
    return (
        <header>
            <img src={header_logo} className="invert-color resize-header" alt=""/>      
            
            <h1 className="header-text">
                2GIG GC3 Panel Emulator
            </h1>
        </header>
    );
}

export default Header;