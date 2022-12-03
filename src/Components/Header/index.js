import "./header.css"
import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import React from "react";
function Header(){
    return(
        <div className="main-header">
            <div className="header-signin">
                <Link to="Signup" className="header-links">Sign Up</Link>
                <Link to="Signin" className="header-links">Sign In</Link>
            </div>
            <div className="header-catogories">
                <img className="header-img" src="" alt=""/>
                <a className="header-links">Used cars</a>
                <a className="header-links">New cars</a>
                <a className="header-links">videos</a>
                <a className="header-links">Sell</a>
            </div>
        </div>
    )
};
export default Header;