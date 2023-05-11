import { Container, Row, Col } from "react-bootstrap";
import './Projects.css'

const Projects = () => {
    return (  
        <>
        <div className="projects px-3">
            <Container className="">
                <Row>
                    <Col className="col-sm-12 col-lg-7 ">
                        <div className="project1 project_item">
                            <h2 className="projectTitle headers">Fitness Tracker</h2>
                            <p className="projectType">CRUD | MongoDB Atlas | Express | Node | EJS | Bootstrap</p>
                            <div className="projectImg d-lg-none fitness-img"></div>
                            <p className="project_Description">A collaborative project completed during my time at General Assembly. Our task was to create an application with the CRUD functionality, this required the use of a database (MongoDB Atlas), axios calls to our Express server, and EJS (extended JavaScript) to display pages.</p>
                            <a href='https://fitness-tracker-ga.herokuapp.com/'>
                            <button className="btn showProject">Show Fitness Tracker</button>
                            </a>
                            <a href='https://github.com/rominadouk/Fitness-Tracker-CRUD-Application'>
                            <button className="btn showProject showCode">Show Code</button>
                            </a>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="projectImg mt-lg-3 fitness-img"></div>
                    </Col>
                </Row>
            </Container>
            {/* DASHED LINE CONTAINER */}
            <Container>
            <div className='dashed_line'></div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="col-sm-12 col-lg-7">
                        <div className="project2 project_item">
                            <h2 className="projectTitle headers">Real-ist</h2>
                            <p className="projectType"> Python | Django | React JS | PostgreSQL</p>
                            <div className="projectImg d-lg-none realist-img"></div>
                            <p className="project_Description"> A collaborative group project during my time at General Assembly. Our task was to build a Django API (Application Programming Interface) for our backend, and utilize React JS for our frontend, this project needed full CRUD functionality and must be able to display data. We decided on a Real Estate website, we learned Python and Tailwind CSS for this project. (*render.com may take a second to load)</p>
                            <a href='https://real-ist-frontend.onrender.com/' >
                            <button className="btn showProject">Show Real-ist</button>
                            </a>
                            <a href='https://github.com/ryanmoon19/real-ist_frontend'>
                            <button className="btn showProject showCode">Show Frontend Code</button>
                            </a>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="projectImg mt-lg-3 realist-img"></div>
                    </Col>
                </Row>
            </Container>
            {/* DASHED LINE CONTAINER */}
            <Container>
            <div className='dashed_line'></div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="col-sm-12 col-lg-7">
                        <div className="project3 project_item">
                            <h2 className="projectTitle headers">Zen</h2>
                            <p className="projectType">MongoDB Atlas | Express JS | React JS | Node</p>
                            <div className="projectImg d-lg-none zen-img"></div>
                            <p className="project_Description">My final capstone project to mark the completion of my time at General Assembly. I chose to hone my skills with the MERN stack. Zen is a mental health/self care application that helps users go more in depth about what they're feeling and in some instances, will provide users with resources based on the named emotions. Zen doubles as a journal, with the ability to save emotions that day and create journal posts. Try it out to find out more. </p>
                            <a href='https://zen-frontend.herokuapp.com/'>
                                <button className="btn showProject">Show Zen</button>
                            </a>
                            <a href='https://github.com/rominadouk/zen_frontend'>
                                <button className="btn showProject showCode">Show Code</button>
                            </a>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="projectImg mt-lg-3 zen-img"></div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Projects;