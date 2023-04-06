import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Navigation from "./components/Navbar";
import Bio from "./components/Bio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
        <Navigation/>
        <Intro id='intro'/>
        <Projects id='projects'/>
        <Bio id='bio'/>
        <ContactForm id='contactForm' />
        <Footer/>
    </div>
  );
}

export default App;
