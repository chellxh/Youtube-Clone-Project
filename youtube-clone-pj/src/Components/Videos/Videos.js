import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar/Avatar";
import "./Videos.css";

function Videos({ video }) {
  return (
    <div className="videoPost">
      <Link to={`/video/${video.id.videoId}`}>
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
            <h5>{video.snippet.title}</h5>
            <p>{video.channelTitle}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Videos;
