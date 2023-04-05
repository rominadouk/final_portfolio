import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
    return (  
        <>
        <Container>
            <Row>
                <Col>
                    <div className="project1 project_item">
                        <h2>Project Fitness Tracker</h2>
                        <p>Project Type</p>
                        <p>Project Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <div className="project2 project_item">
                        <h2>Project Real-ist</h2>
                        <p>Project Type</p>
                        <p>Project Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <div className="project3 project_item">
                        <h2>Project Zen</h2>
                        <p>Project Type</p>
                        <p>Project Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Projects;