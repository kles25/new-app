import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className='header-holder'>
            <header>
                <div className='pages-row'>
                    <div className='pages-col-3'>
                        <div className='home-logo'>Les</div>
                    </div>
                    <div className="pages-col-5"></div>
                    <div className="pages-col-4 pages-navbar">
                        <div className="pages-row navbar-holder">
                            <nav className=""><a className="home-navbar-link" ><Link to="/">HOME</Link></a></nav>
                            <nav className=""><a className="home-navbar-link" ><Link to="/about">ABOUT</Link></a></nav>
                            <nav className=""><a className="home-navbar-link" ><Link to="/contact">CONTACT</Link></a></nav>
                            <nav className=""><a className="home-navbar-link" ><Link to="/news">NEWS</Link></a></nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
