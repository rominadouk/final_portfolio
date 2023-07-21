import { Container, Row, Col} from 'react-bootstrap'
import './Bio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)




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
                        <p className='bio_description'>I'm a full-stack software engineer, in other words, a lifelong student! I enjoy computer games, my family, and my Pomeranian in my free time. I worked as a server in the restaurant industry for five years in management where I built my people skills and I never lost sight of my true goal - to pursue something I was passionate about... Software Engineering! I created a comfortable position to focus on coding and went all in. I gained a solid foundation of frontend and backend languages and frameworks through General Assembly's Software Engineering Immersive Program and I continue to look for growth opportunities.</p>
                        <br/>
                    </Col>
                    <Row>
                        <Col className='text-center'>
                            <FontAwesomeIcon class='language-icons mx-2 mx-lg-0 col-lg-1' alt='html5-logo' icon={['fab', 'html5']} />
                            <FontAwesomeIcon class='language-icons mx-2 mx-lg-0 col-lg-1' alt='css3-logo' icon={['fab', 'css3-alt']} />
                            <FontAwesomeIcon class='language-icons mx-2 mx-lg-0 col-lg-1' alt='javascript-logo' icon={['fab', 'js']} />
                            <FontAwesomeIcon class='language-icons mx-2 mx-lg-0 col-lg-1' alt='python-logo' icon={['fab', 'fa-python']} />      
                        </Col>
                    </Row>
                </Row>
                
            </Container>

        </div>
     );
}
 
export default Bio;
