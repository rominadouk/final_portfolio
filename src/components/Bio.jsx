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
                        <p className='bio_description'>I'm a 24-year-old full-stack software engineer, in other words, a lifelong student! I'm a dog mom to the cutest Pomeranian. I enjoy computer games and my family in my free time. I worked as a server, working in the restaurant/business industry for five years, building my people and business skill sets. Eventually, I created a comfortable position to make a career change and went all in. I took the first step in my tech journey and gained a solid foundation of frontend and backend languages and frameworks through General Assembly's Software Engineering Immersive Program.</p>
                        <br/>
                        <p className='bio_description'>I speak: HTML, CSS, JavaScript, TypeScript. I'm always learning to become more fluent in these areas and how to incorporate Artificial Intelligence in my projects.</p>
                    </Col>
                </Row>
            </Container>

                </div>
     );
}
 
export default Bio;
