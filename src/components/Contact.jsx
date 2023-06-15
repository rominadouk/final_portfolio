import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Contact.css'
import { FiletypePdf, Github, Linkedin } from 'react-bootstrap-icons';


const ContactForm = () => {

    return (  
        <div id="contact-info">
            <Container>
                <Row>
                    <Col className='offset-lg-2 col-lg-8'>
                        <div className='solid-line'></div>
                        <ul className='links mt-5'>
                            <li className='lead mt-3 mb-2 display-5 contact-header'><strong>Get In Touch</strong></li>
                            <a className='nav-link mb-1' href="https://github.com/rominadouk">
                                <li className='link'> <Github className='social-icon'/> GitHub</li>
                            </a>
                            <a className='nav-link mb-1' href="https://www.linkedin.com/in/rominadouk/">
                                <li className='link'><Linkedin className='social-icon'/> LinkedIn</li>
                            </a>
                            <a className='nav-link' href="https://drive.google.com/file/d/13Rp1rZbd0D7v-1oBqYgZL0gE0syZqN4s/view?usp=sharing">
                            <li className='link'><FiletypePdf className='social-icon'/>Resume (PDF) </li>
                            </a>
                        </ul>
                        <p class='credits'>This portfolio was designed and built by Romina Douk</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ContactForm;