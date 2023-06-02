import Youtube from "react-youtube";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import fetchData from "../../fetchAPI/Fetch";
import { v4 as generateId } from "uuid";
import Share from "./Share/Share";
import "./Video.css";

function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });
  const [comments, setComments] = useState([]);

  const opts = {
    height: "600",
    width: "920",
    playerVars: {
      autoplay: 1,
    },
  };

  let url = `/video/${id}`;

  useEffect(() => {
    try {
      let results = fetchData({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_KEY}&id=${id}&part=snippet,player`,
      });
      setVideo(results.items[0]);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  function handleTextChange(event) {
    setComment({ ...comment, [event.target.id]: event.target.value });
  }

  function handleComment(event) {
    event.preventDefault();
    setComment({
      name: "",
      comment: "",
    });
    setComments([...comments, comment]);
  }

  return (
    <div className="video">
      <div className="videoWrapper">
        <h2>{video?.snippet?.title}</h2>
        <Youtube videoId={id} opts={opts} />
        <Share copyText={url} />
        <hr />
        <div className="videoComments">
          <h4>Add a Comment:</h4>
          <hr />
          <form onSubmit={handleComment}>
            <label htmlFor="name">
              <strong>Name:</strong>
              <br />
              <input type="text" id="name" onChange={handleTextChange} />
            </label>
            <br />
            <label htmlFor="comment">
              <strong>Comment:</strong>
              <br />
              <input type="text" id="comment" onChange={handleTextChange} />
            </label>
            <br />
            <button type="submit" className="btn btn-danger">
              Add Comment
            </button>
          </form>
          <hr />
          <h4>Comments</h4>
          <ul>
            {comments.map((commenter) => {
              return (
                <li className="comments" key={generateId()}>
                  <span className="commenterName">{commenter.name}</span>
                  <br />
                  {commenter.comment}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Video;
