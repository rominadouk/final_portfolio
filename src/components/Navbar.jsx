//Navigation Bar
import { Link } from "react-scroll";
import React, { useState } from 'react';
import './Navbar.css'






const Navbar = () => {
    return (  
        <nav>
            <ul className="navUL">
                <li>Home</li>
                <li>Projects</li>
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar;