import React from "react";
import './Header.css';

function Header() {
    return (
        <>
            <div className="header">
                <a href="#default" className="logo">Shopping Portal</a>
                <div>
                    <a href="#home">Home</a>
                    {/* <a class="active" href="#home">Home</a> */}
                    {/* <a href="#contact">Contact</a> */}
                </div>
            </div>
        </>
    )
}

export default Header;