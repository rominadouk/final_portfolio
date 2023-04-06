import { Link } from "react-scroll";
import React from 'react';
import './Navbar.css'
import { Container } from "react-bootstrap";


const Navigation = () => {

    const scrollTop = () => { 
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }


    return (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id='main-nav'>
            <Container fluid>
                <h3 className="navbar-brand" id="brand" onClick={scrollTop}>Romina Douk</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav navUL">
                        <li className="nav-item">
                        <Link className="nav-link" to="intro" spy={true} smooth={true} offset={-180} duration={0}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="projects" spy={true} smooth={true} offset={-90} duration={90}>Projects</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="bio" spy={true} smooth={true} duration={90}>Bio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="contactForm" spy={true} smooth={true} duration={97}>Contact</Link>
                        </li>
                    </ul>
                </div>
                </Container>
            </nav>
        </>
    );
}
export default Navigation;