import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
    return ( 
        <>
        <Container className='mt-5'>
            <Row>
                <Col className='introduction_header'>
                    <h1>Hi! I'm Romina.</h1>
                    <p class="intro_text">A tenacious software engineer ready to build your next big idea into a meaningful digital experience.</p>
                </Col>
            </Row>
        </Container>
        </>
        );
    }
 
export default Intro;