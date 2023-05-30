import React from "react";
import Video from "./Videos/Video";

function SearchBar({ searchedVideo }) {
  return (
    <div className="allVideos">
      <div className="allVideos-list">
        {searchedVideo?.length === 0 && (
          <p>No Search Results Yet! Please sumbit a search above.</p>
        )}
        {searchedVideo?.length > 0
          ? searchedVideo.map((video) => {
              return (
                <div
                  className="video"
                  key={video.id.videoId || video.id.channelId}
                >
                  <Video video={video} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SearchBar;

/**
 * will create video component to go where p tag is
 * {searchedVideo} - state of search results in App.js
 */
