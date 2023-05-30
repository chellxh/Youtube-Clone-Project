import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import fetchAPI from "./fetchAPI/Fetch";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Video from "./Components/Videos/Video";

function App() {
  const [searchedVideo, setSearchedVideo] = useState([]);
  const [userInput, setUserInput] = useState("");

  // useEffect(() => {
  //   handleUserInput();
  // }, [userInput]); // idk about this yet

  async function handleUserInput(event) {
    event.preventDefault();
    try {
      let data = await fetchAPI(userInput);
      console.log(data.items);
      setUserInput("");
      setSearchedVideo(data.items);
    } catch (e) {
      console.log(e);
    }
  }
  function handleTextChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userInput={userInput}
                handleTextChange={handleTextChange}
                handleUserInput={handleUserInput}
              />
            }
          />
          <Route
            path="/"
            element={<SearchBar searchedVideo={searchedVideo} />}
          />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/**
 * ROUTER section is just a mock up to see if searchBar comonet is showing "No Search Yet" - will be deleted when code is done.
 * */
