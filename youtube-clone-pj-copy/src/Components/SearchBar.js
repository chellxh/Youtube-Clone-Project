import React from "react";

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
                  <p>This is where the video component would go.</p>
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
