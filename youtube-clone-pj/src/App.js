import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Video from "./Components/Videos/Video";
import About from './Components/About/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
