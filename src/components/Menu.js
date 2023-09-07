import React from 'react';
import { NavLink } from "react-router-dom";

import NavLogo from '../static/images/browser.png';
import ContactLogo from '../static/images/mail-inbox-app.png';
import AboutLogo from '../static/images/tinder.png'
import HomeLogo from '../static/images/house.png';

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    <img src={NavLogo} alt="" width="35" height="35"></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-uppercase">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link gap-2 d-flex align-items-center">
                                <img src={HomeLogo} width='20' height='20' className='mr-2' alt=''></img> Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={"nav-link gap-2 d-flex align-items-center"}>
                                <img src={AboutLogo} width='20' height='20' className='mr-2' alt=''></img> About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={"nav-link gap-2 d-flex align-items-center"}>
                                <img src={ContactLogo} width='20' height='20' className='mr-2' alt=''></img> Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;