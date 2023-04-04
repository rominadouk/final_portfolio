import Homepage from "./components/Home";
import './App.css';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
        <Navbar sticky="top"/>
        <Homepage />
    </div>
  );
}

export default App;
