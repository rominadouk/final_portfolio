import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Contact.css'
import { FiletypePdf, Github, Linkedin } from 'react-bootstrap-icons';


const ContactForm = () => {

    return (  
        <div id="contact-info">
            <Container>
                <Row>
                    <div className='solid-line'></div>
                    <Col className=' col-lg-8'>
                        <ul className='links'>
                            <li className='lead mt-3 mb-2 display-6 contact-header contact-header'><strong>Get In Touch</strong></li>
                            <a className='nav-link mb-1' href="https://github.com/rominadouk" target='_blank'>
                                <li className='link'> <Github className='social-icon'/> GitHub</li>
                            </a>
                            <a className='nav-link mb-1' href="https://www.linkedin.com/in/rominadouk/" target='_blank'>
                                <li className='link'><Linkedin className='social-icon'/> LinkedIn</li>
                            </a>
                            <a className='nav-link' href="https://drive.google.com/file/d/1IhR1mTM4qKPgdKupwfQHeQxDlky9O1-Y/view?usp=sharing" target='_blank'>
                                <li className='link'><FiletypePdf className='social-icon'/>Resume (PDF) </li>
                            </a>
                        </ul>
                        <p class='credits mx-3'>This site was designed and built by Romina Douk.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ContactForm;