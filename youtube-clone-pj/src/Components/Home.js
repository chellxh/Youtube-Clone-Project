import React from "react";
import SearchBar from "./SearchBar";

function Home({ handleTextChange, userInput, handleUserInput }) {
  return (
    <aside id="search" className="d-none d-md-block">
      <form onSubmit={handleUserInput}>
        <div className="container py-3 py-xxl-4">
          <div className="row">
            <div className="col">
              <input
                id="searchBar"
                className="form-control"
                name="searchBar"
                type="text"
                value={userInput}
                placeholder="Search..."
                onChange={handleTextChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-danger">
                Search
              </button>
              <SearchBar />
            </div>
          </div>
        </div>
      </form>
    </aside>
  );
}

export default Home;
