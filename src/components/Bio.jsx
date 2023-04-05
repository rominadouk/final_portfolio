import { Container, Row, Col} from 'react-bootstrap'


const Bio = () => {
    return ( 
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>I'm Romina, a software engineer based in Sacramento.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti, commodi praesentium sint explicabo ipsum, dicta, nobis iure minus eveniet vero facilis voluptates doloribus suscipit minima consequatur adipisci. Consequuntur, provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt esse exercitationem. Nesciunt illum ut error ratione, vitae aperiam obcaecati ad recusandae deserunt nobis architecto cumque ea eos saepe rerum!</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="strengths">
                        <h3>Strengths</h3>
                        <ul>
                            <li>React JS</li>
                            <li>Express</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="learning">
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
