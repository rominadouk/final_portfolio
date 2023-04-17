import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
    return ( 
        <>
        <div className='px-3' id='intro'>
            <Container id='intro_container'>
                <Row>
                    <Col>
                        <h1 className='display-1 headers'><strong>Hi! I'm Romina.</strong></h1>
                        <p className="intro_text">A tenacious software engineer ready to build your next big idea into a digital experience.</p>
                    </Col>
                </Row>
            </Container>
            <div className='solid-line'></div>
        </div>
        </>
        );
    }
 
export default Intro;