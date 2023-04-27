import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap';
import Icon from './Icon';

const Intro = () => {
    return ( 
        <>
        <div className='px-3' id='intro'>
            <Container id='intro-container'>
                <Row>
                    <Col>
                        <h1 className='display-1 headers'><strong>Hi! I'm <span id='romina'>Romina.</span></strong></h1>
                        <p className="display-6 headers">A Software Engineer.</p>
                        <p className="intro-text">I enjoy creating efficient and reliable software.<br/> 
                        Let's build something amazing together!</p>
                    </Col>
                </Row>
            </Container>
            <Icon />
            <div className='solid-line'></div>
        </div>
        </>
        );
    }
 
export default Intro;