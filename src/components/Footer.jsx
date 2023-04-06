import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return ( 
            <Container fluid className='footer'>
                <Row>
                    <Col>
                            <ul className='footerUL pt-3'>
                                <li><strong>Get In Touch</strong></li>
                                <li>Contact</li>
                                <a href="https://github.com/rominadouk">
                                    <li>GitHub</li>
                                </a>
                                <a href="https://github.com/rominadouk">
                                    <li>LinkedIn</li>
                                </a>
                                <li>Resume</li>
                            </ul>
                    </Col>
                </Row>
            </Container>
     );
}
 
export default Footer;
