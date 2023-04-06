import { Container, Row, Col} from 'react-bootstrap'
import './Bio.css'


const Bio = () => {
    return ( 
        <>
        <div className='bio'>
            <div className='solid-line'></div>
            <Container className='bio-text'>
                <Row>
                    <Col className='col-11'>
                        <h2 className='display-3'> <strong>A software engineer based in Sacramento, California.</strong></h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='col-sm-3 col-md-9 mt-4'>
                        <p className='bio_description'>I'm a 24 year old fullstack software engineer aka a life-long student! I'm a dog mom to the cutest Pomeranian I enjoy computer games or family in my free time. I completed a few years of college but decided it was not the right time for me to attend. I continued as a server, working  in the restaurant/business industry for 5 years building up my people and business skill sets. Eventually I was able to create a comfortable position for myself to be able make a career change and I went all in. I took the first step in my tech journey and gained a solid foundation through General Assembly's Software Engineering Immersive Program.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-2'>
                <Row>
                    <Col className="strengths">
                        <h3>Strengths</h3>
                        <ul>
                            <li>React JS</li>
                            <li>Express</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Col>
                    <Col className="learning">
                        <h3>Learning</h3>
                        <ul>
                            <li>Integrating Open AI's API into webapps</li>
                            <li>TypeScript</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>
                    </Col>
                </Row>
                </Container>
                </div>
        </>
     );
}
 
export default Bio;
