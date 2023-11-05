import React from "react";

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
                            <nav className=""><a className="home-navbar-link" href="/">HOME</a></nav>
                            <nav className=""><a className="home-navbar-link" href="/about">ABOUT</a></nav>
                            <nav className=""><a className="home-navbar-link" href="/contact">CONTACT</a></nav>
                            <nav className=""><a className="home-navbar-link" href="/news">NEWS</a></nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
