import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../assets/mega-creator (1).svg'

const Intro = () => {
    return ( 
        <>
        <div className='px-3 mt-sm-5' id='intro'>
            <Container id='intro-container'>
                <Row>
                    <Col className='col-12 col-xl-4'>
                        <h1 className='display-1 headers'><strong><span className='display-3'>Hi! I'm </span><span id='romina'>Romina.</span></strong></h1>
                        <p className="display-6 headers">Full-Stack Software Engineer</p>
                        <p className="intro-text">I enjoy creating efficient and reliable software.<br/> 
                        Let's build something amazing together!</p>
                    </Col>
                    <Col className='col-12 col-md-7 col-xl-8 mr-0 d-none d-lg-block'>
                    <img id='icon' src={Icon} alt="Logo" />
                    </Col>
                </Row>
                <Row className='scroll-row'>
                    <Col className='col-12'>
                    <p className='scroll-down-txt'>Scroll Down</p>
                    <div id='intro-line' className='solid-line'></div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
        );
    }
 
export default Intro;