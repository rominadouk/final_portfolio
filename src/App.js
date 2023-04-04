import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
        <Navbar sticky="top"/>
        <Intro/>
        <Projects />
    </div>
  );
}

export default App;
