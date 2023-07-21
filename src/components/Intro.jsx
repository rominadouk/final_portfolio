import './Intro.css'
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../assets/mega-creator (1).svg'
import { Link } from 'react-scroll';
import { ArrowUp } from 'react-bootstrap-icons';

const Intro = () => {

    const scrollDownButton = () => {
        const scrollButton = document.getElementById("scroll-down")
        if(window.scrollY < 20) {
            scrollButton.style.display = "block" //Show Button
            scrollButton.classList.add("bounce") //Add bounce class if button is in view
            scrollButton.classList.add("scroll-down-animation")

        } else {
        //Button will show if user scrolls down
        scrollButton.style.display = "none" //Hide Button
        scrollButton.classList.remove("bounce") //remove bounce class if button is in view
        scrollButton.classList.remove("scroll-down-animation") //remove

    }
}



    useEffect(()=> {
        //calling initial function
        scrollDownButton();

        // Add an event listener to run function everytime user scrolls
        window.addEventListener("scroll", () => {
            scrollDownButton()
        });

    },[])

    return ( 
        <>
        <div className='px-3 mt-sm-5' id='intro'>
            <Container id='intro-container' className=''>
                <Row>
                    <Col className='col-12 col-xl-4'>
                        <h1 className='display-1 headers'><strong><span className='display-3'>Hi! I'm </span><span id='romina'>Romina.</span></strong></h1>
                        <p className="display-6 headers">Full-Stack Software Engineer</p>
                        <p className="intro-text">I enjoy creating efficient and reliable software.<br/> 
                        Let's build something amazing together!</p>
                    </Col>
                    <Col className='col-12 col-md-7  offset-1 col-xl-7 mr-0 d-none d-lg-block'>
                    <img id='icon' src={Icon} alt="Logo" />
                    </Col>
                </Row>
                <Row className='scroll-row'>
                    <Col className='col-12'>
                        <Link to="projects" spy={true} smooth={true} offset={-90} duration={90}>
                            <p className='scroll-down-txt' id='scroll-down'> scroll down <ArrowUp id="up-arrow"/> </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
        );
    }
 
export default Intro;