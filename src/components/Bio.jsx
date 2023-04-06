import { Container, Row, Col} from 'react-bootstrap'
import './Bio.css'


const Bio = () => {
    return ( 
        <>
        <div className='solid-line'></div>
            <Container className='bio-text'>
                <Row>
                    <Col className='col-11 text-center'>
                        <h2 className='display-4'> <strong>I'm Romina, a software engineer based in Sacramento, California.</strong></h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='col-9 offset-1 text-center mt-4'>
                        <p className='bio_description'>Hi, I'm Romina! I'm a 24 year old software engineering student. I'm a lover of a little Pomeranian named Nova and I enjoy computer games or my family in my free time. I completed a few years of college but decided it was not the right time for me to attend due to financial reasons. I continued on with my job as a server where I worked in the industry for 5 years building up my skill set throughout the years some of these include time management, customer service mediation, meeting deadlines etc. I eventually became a shift lead at my first job and was assigned management duties. I began to seek more stability in life and decided to prioritize my future and where I really saw myself. With the help of those close to me I was able to create a situation where I was comfortable enough to make a career change and I decided to dedicate all of my time and effort to it. During my time in college I took a few classes in computer science and something about coding just clicked with me, something I never felt in any other field.I decided to take a dive into the tech world and dedicate myself to Software Engineering and gain a solid foundation through General Assembly.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-2'>
                <Row>
                    <Col className="strengths text-center">
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
        </>
     );
}
 
export default Bio;
