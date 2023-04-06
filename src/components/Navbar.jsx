import { Link, animateScroll } from "react-scroll";
import React from 'react';
import './Navbar.css'


const Navigation = () => {
    return (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='main-nav'>
            <div className="container-fluid">
                <a className="navbar-brand" id="brand" href="#">Romina Douk</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav navUL">
                        <li className="nav-item">
                        <Link className="nav-link" to="intro" spy={true} smooth={true} offset={-80} duration={100}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="projects" spy={true} smooth={true} offset={-100} duration={90}>Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="bio" spy={true} smooth={true} offset={-100} duration={500}>Bio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link mr-5" to="contactForm" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>


        </>
    );
}
export default Navigation;