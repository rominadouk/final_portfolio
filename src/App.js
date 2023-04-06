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
        <Intro/>
        <Projects id='projects'/>
        <Bio />
        <ContactForm />
        <Footer/>
    </div>
  );
}

export default App;
