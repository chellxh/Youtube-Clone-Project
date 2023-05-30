import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

function Videos({ video }) {
  return (
    <div className="videoPost">
      <Link to={`/videos/${video.id.videoId}`}>
        <img
          className="videoPostThumbnail"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.high.url}
        />
        <div className="videoPostInfo">
          <Avatar
            className="videoPostAvatar"
            alt={video.snippet.channelTitle}
            src={video.snippet.thumbnails.medium.url}
          />
          <div className="videoPostText">
            <h4>{video.snippet.title}</h4>
            <p>{video.channelTitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Videos;
