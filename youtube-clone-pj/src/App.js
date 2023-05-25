import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import fetchAPI from "./fetchAPI/Fetch";

function App() {
  const [searchedVideo, setSearchedVideo] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    handleUserInput();
  }, [userInput]); // idk about this yet

  async function handleUserInput(event) {
    event.preventDefault();

    try {
      let result = await fetchAPI({
        method: "get",
        resource: `&part=snippet&q=${userInput}&maxResults=20&order=viewCount`,
      });
      setUserInput("");
      setSearchedVideo(result.items);
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
        <Routes>
          <Route path="/">Home</Route>
          <Route
            path="/videos"
            element={<SearchBar searchedVideo={searchedVideo} />}
          />
          <Route path="/video/:id">VideoByID</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/**
 * ROUTER section is just a mock up to see if searchBar comonet is showing "No Search Yet" - will be deleted when code is done.
 * */
