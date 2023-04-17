import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return ( 
        <div id='footerContainer'>
            <Container fluid className='footer'>
                <Row>
                    <Col>
                            <ul className='footerUL mb-3'>
                                <li className='lead mt-3 mb-2'><strong>Get In Touch</strong></li>
                                <a className='nav-link mb-1' href="https://github.com/rominadouk">
                                    <li>GitHub</li>
                                </a>
                                <a className='nav-link mb-1' href="https://www.linkedin.com/in/rominadouk/">
                                    <li>LinkedIn</li>
                                </a>
                                <a className='nav-link' href="https://drive.google.com/file/d/1duQgP7nxLy3a1uh-UruslnmBeOK9NNK8/view?usp=share_link">
                                <li>Resume (PDF) </li>
                                </a>
                            </ul>
                    </Col>
                </Row>
            </Container>
            </div>
     );
}
 
export default Footer;
