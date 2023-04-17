import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return ( 
        <div id='footerContainer'>
            <Container fluid className='footer'>
                <Row>
                    <Col>
                            <ul className='footerUL pt-3'>
                                <li><strong>Get In Touch</strong></li>
                                <a href="https://github.com/rominadouk">
                                    <li>GitHub</li>
                                </a>
                                <a href="https://www.linkedin.com/in/rominadouk/">
                                    <li>LinkedIn</li>
                                </a>
                                <a href="https://drive.google.com/file/d/1duQgP7nxLy3a1uh-UruslnmBeOK9NNK8/view?usp=share_link">
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
