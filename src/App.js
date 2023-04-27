import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Navigation from "./components/Navbar";
import Bio from "./components/Bio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id='main' className="mainPage">
        <Navigation />
        <Intro />
        <Projects />
        <Bio />
        <ContactForm id='contactForm' />
        <Footer />
    </div>
  );
}

export default App;
