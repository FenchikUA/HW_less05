import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
