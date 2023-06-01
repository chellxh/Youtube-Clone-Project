import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home';
import Video from "./Components/Videos/Video";
//import About from './Components/About/About';

function App() {
 

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} />
          <Route path="/about">about</Route>
          <Route path="/video/:id" element={<Video />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/**
 * ROUTER section is just a mock up to see if searchBar comonet is showing "No Search Yet" - will be deleted when code is done.
 * */
