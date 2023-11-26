import { Container, Row, Col } from "react-bootstrap";
import './Projects.css'
import { useState, useRef, useEffect } from "react";

const Projects = () => {
    // FADE IN FUNCTION

    //set state isVisible to false to hide initial content
    const [isVisible, setVisible] = useState(false);

    //utilize ref hook (reference elements/values in react components, domRef referenced DOM element in component)
    const domRef = useRef();
    // Function will be executed after component is rendered. Second argument is array of dependencies that determines when effect should run. Empty array = effect run once after initial render. 
    useEffect(() => {
        //IntersectionObserver: Browser API allows observing when element enters/exits VH or intersects with other elements.
        //if there is a change, it will use the callback function; this function will update the visible state to whether or not the entry is intersecting. true = in VH. false = not in VH
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        });
        //local variable to hold reference to current DOM element being observed
        const currentRef = domRef.current

        // if currentRef is valid and available, intersection observer will observe the element, calls observe on current element.
        if (currentRef) {
            observer.observe(domRef.current);
        }
        // clean up function, called when component unmounts or when effect is rerun due to dependencies; here it is used to unobserve the element when the component is mounted (the effect already happened); this helps prevent memory leaks
        return () => {
            //Check if domRef.current exists before unobserving
            if (currentRef) {
                observer.unobserve(currentRef)
        }
    }

    }, []);



    return ( 
        <>
        <div className={`fade-in-section projects px-3 ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <Container id="main-project1-container">
                <Row>
                    <Col className="col-sm-12 col-lg-7 ">
                        <div className="project1 project_item">
                            <h2 className="projectTitle headers">Personal Portfolio</h2>
                            <p className="projectType">HTML | CSS | Javascript | React | React-Bootstrap</p>
                            <div className="projectImg d-lg-none portfolio-img"></div>
                            <p className="project_Description"> A personal project to showcase my work, designed and built by me. This project was designed with a mobile-first approach and is responsive. This project utilizes various react hooks and react-smooth-scroll. It features a few Javascript functions and CSS animimations to create a bouncing effect for the side scroll and a hover-in on scroll effect for the 'projects' container. This portfolio is consistently updated. </p>
                            {/* <a href=''>
                            <button className="btn showProject">Show App</button>
                            </a> */}
                            <a href='https://github.com/rominadouk/final_portfolio' target='_blank'>
                                <button className="btn showProject">Show Code</button>
                            </a>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="projectImg mt-lg-3 portfolio-img"></div>
                    </Col>
                </Row>
            </Container>
            {/* DASHED LINE CONTAINER */}
            <Container>
            <div className='dashed_line'></div>
            </Container>
            <Container id="main-project2-container" className='mt-5'>
                <Row>
                    <Col className="col-sm-12 col-lg-7">
                        <div className="project2 project_item">
                            <h2 className="projectTitle headers">Jeopardy Trivia Game Dupe</h2>
                            <p className="projectType"> HTML | CSS | React | Bootstrap | Axios</p>
                            <div className="projectImg d-lg-none jservice-img"></div>
                            <p className="project_Description"> A solo project built to demonstrate pulling data from a third-party API, inspired by the popular trivia gameshow Jeopardy. Users can keep track of their score and adjust based on the amount of points the question is worth. </p>
                            <a href='https://jeopardy-dupe-27b12cc3d688.herokuapp.com/' target='_blank'>
                                <button className="btn showProject">Show App</button>
                            </a>
                            <a href='https://github.com/rominadouk/jeopardy-game' target='_blank'>
                                <button className="btn showProject showCode">Show Code</button>
                            </a>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="projectImg mt-lg-3 jservice-img"></div>
                    </Col>
                </Row>
            </Container>
            {/* DASHED LINE CONTAINER */}
            <Container>
            <div className='dashed_line'></div>
            </Container>
            <Container id="main-project3-container" className='mt-5'>
                <Row>
                    <Col className="col-sm-12 col-lg-7">
                        <div className="project3 project_item">
                            <h2 className="projectTitle headers">Zen</h2>
                            <p className="projectType">MongoDB | Express JS | React JS | Node | TypeScript | Tailwind CSS</p>
                            <div className="projectImg d-lg-none zen-img"></div>
                            <p className="project_Description">Zen is a selfcare application that helps users go more in depth about what they are feeling and aims to improve overall well-being with an emphasis on mental health by tracking self-care habits. Zen features journaling, goal tracking, and selfcare tip suggestions. This was a cross-functional project with design by UX/UI designer Christian Jackson and built by me. Zen is a major project of mine that is consistenly being updated.</p>
                            <a href='https://zen-redesign-33d46e687340.herokuapp.com/'  target='_blank'>
                                <button className="btn showProject">Show App</button>
                            </a>
                            <a href='https://github.com/rominadouk/zen-redesign' target='_blank'>
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