import { useState } from "react";
import Videos from "../Videos/Videos";
import fetchData from "../../fetchAPI/Fetch";
import "./Home.css";
function Home() {
  const [userInput, setUserInput] = useState("");
  const [searchedVideo, setSearchedVideo] = useState([]);

  async function handleUserInput(event) {
    event.preventDefault();
    try {
      let data = await fetchData({
        method: "get",
        url: `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${userInput}&maxResults=20&order=viewCount`,
      });
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
    <div>
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
              </div>
            </div>
          </div>
        </form>
      </aside>
      <div className="recommendedVideos">
        <p>Search Results:</p>
        <hr />
        <div className="recommendedVideosList">
          {searchedVideo?.length === 0 && (
            <p className="noSearch">
              No Search Results Yet! Please submit a search above.
            </p>
          )}
          {searchedVideo?.length > 0
            ? searchedVideo.map((video) => {
                return (
                  <div
                    className="oneVideo"
                    key={video.id.videoId || video.id.channelId}
                  >
                    <Videos video={video} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
