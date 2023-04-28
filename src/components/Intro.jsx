import './Intro.css'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../assets/mega-creator (1).svg'
import { Link } from 'react-scroll';
import { ArrowUp} from 'react-bootstrap-icons';

const Intro = () => {

    //const [scrollDown, setScrollDown] = useState(false)
    console.log(window.location)

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
                            <p className='scroll-down-txt'> <ArrowUp/> scroll down </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
        );
    }
 
export default Intro;