import { Container, Row, Col} from 'react-bootstrap'
import './Bio.css'


const Bio = () => {
    return ( 
        <div className='bio px-3'>
            <div id='bio-line'className='solid-line'></div>
            <Container className='bio-text'>
                <Row>
                    <Col className='offset-lg-2 col-lg-8'>
                        <h2 className='display-3 headers'> <strong>A <span className='softwareEngineerTxt'>software engineer</span> based in Sacramento, California.</strong></h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='col-lg-8 offset-lg-2 mt-4'>
                        <p className='bio_description'>I'm a full-stack software engineer, in other words, a lifelong student! I enjoy computer games, my family, and my Pomeranian in my free time. I worked as a server in the restaurant industry for five years in management where I built my people and business skill sets but I never lost sight of my true goal - to pursue something I was passionate about... Software Engineering! I created a comfortable position to make a career change and went all in. I took the first step in my tech journey and gained a solid foundation of frontend and backend languages and frameworks through General Assembly's Software Engineering Immersive Program.</p>
                        <br/>
                        <p className='bio_description'>Languages: HTML, CSS, JavaScript, TypeScript, Python. I'm always working towards becoming more fluent in these areas.</p>
                    </Col>
                </Row>
            </Container>

                </div>
     );
}
 
export default Bio;
