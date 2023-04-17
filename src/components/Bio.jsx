import { Container, Row, Col} from 'react-bootstrap'
import './Bio.css'


const Bio = () => {
    return ( 
        <>
        <div className='bio px-3'>
            <div className='solid-line'></div>
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
                        <p className='bio_description'>I'm a 24-year-old full-stack software engineer, AKA a lifelong student! I'm a dog mom to the cutest Pomeranian. I enjoy computer games and my family in my free time. I completed a few years of college but decided it was not the right time to attend. I continued as a server, working in the restaurant/business industry for five years, building my people and business skill sets. Eventually, I created a comfortable position to make a career change and went all in. I took the first step in my tech journey and gained a solid foundation through General Assembly's Software Engineering Immersive Program.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-4'>
                <Row>
                    <Col className="strengths offset-md-2 col-md-4">
                        <h3 className='headers'>Strengths</h3>
                        <ul>
                            <li>React JS</li>
                            <li>Express</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Col>
                    <Col className="learning col-md-4">
                        <h3 className='headers'>Learning</h3>
                        <ul>
                            <li>Integrating Open AI's API into webapps</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                </Row>
                </Container>
                </div>
        </>
     );
}
 
export default Bio;
