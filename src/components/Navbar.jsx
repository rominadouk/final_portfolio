//Navigation Bar
import { Link } from "react-scroll";
import React, { useState } from 'react';
import './Navbar.css'






const Navbar = () => {
    return (  
        <nav>
            <ul className="navUL">
                <li className="nav-item">
                    <Link to="homepage" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="bio" spy={true} smooth={true} offset={-100} duration={500}>Bio</Link>
                </li>
                <li className="nav-item">About Me</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar;