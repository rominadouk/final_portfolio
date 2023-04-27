import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../assets/mega-creator (1).svg'

const Intro = () => {
    return ( 
        <>
        <div className='px-3' id='intro'>
            <Container id='intro-container'>
                <Row>
                    <Col className='col-12 col-xl-4'>
                        <h1 className='display-1 headers'><strong>I'm <span id='romina'>Romina.</span></strong></h1>
                        <p className="display-6 headers">A Software Engineer</p>
                        <p className="intro-text">I enjoy creating efficient and reliable software.<br/> 
                        Let's build something amazing together!</p>
                    </Col>
                    <Col className='col-12 col-xl-8'>
                    <img id='icon' src={Icon} alt="Logo" />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12'>
                    <div id='intro-line' className='solid-line'></div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
        );
    }
 
export default Intro;