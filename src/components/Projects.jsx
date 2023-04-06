import { Container, Row, Col } from "react-bootstrap";
import './Projects.css'

const Projects = () => {
    return (  
        <>
        <div className="projects">
            <Container>
                <Row>
                    <Col className="col-sm-12 col-lg-6 ">
                        <div className="project1 project_item">
                            <h2 className="projectTitle">Project Fitness Tracker</h2>
                            <p className="projectType">Project Type</p>
                            <div className="projectImg d-lg-none"></div>
                            <p className="project_Description">Project Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button>Show Project 1</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="projectImg d-none d-lg-block mt-lg-3"></div>
                    </Col>
                </Row>
            </Container>
            {/* DASHED LINE CONTAINER */}
            <Container>
            <div className='dashed_line'></div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="col-sm-12 col-lg-6">
                        <div className="project2 project_item">
                            <h2 className="projectTitle">Project Real-ist</h2>
                            <p className="projectType">Project Type</p>
                            <div className="projectImg d-lg-none"></div>
                            <p className="project_Description">Project Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button>Show Project 2</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="projectImg d-none d-lg-block mt-lg-3"></div>
                    </Col>
                </Row>
            </Container>
            {/* DASHED LINE CONTAINER */}
            <Container>
            <div className='dashed_line'></div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="col-sm-12 col-lg-6">
                        <div className="project3 project_item">
                            <h2 className="projectTitle">Project Zen</h2>
                            <p className="projectType">Project Type</p>
                            <div className="projectImg d-lg-none"></div>
                            <p className="project_Description">Project Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button>Show Project 3</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="projectImg d-none d-lg-block mt-lg-3"></div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Projects;