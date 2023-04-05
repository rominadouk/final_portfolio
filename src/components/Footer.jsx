import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return ( 
            <Container>
                <Row>
                    <Col className="footer">
                            <ul>
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
