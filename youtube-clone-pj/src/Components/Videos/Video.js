import Youtube from "react-youtube";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./../../fetchAPI/Fetch";
import RelatedVideos from "./RelatedVideos";
import { v4 as generateId } from "uuid";
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
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    try {
      let results = fetchData({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&id=${id}&part=snippet,player`,
      });
      console.log(results.data.items[0]);
      setVideo(results.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  function handleTextChange(event) {
    setComment({ ...comment, [event.target.id]: event.target.value });
  }

  function handleComment(event) {
    event.preventDefault();

    setComments([...comments, comment]);
    setComment({
      name: "",
      comment: "",
    });
  }

  return (
    <div className="video">
      <div className="videoWrapper">
        <h2>{video?.snippet?.title}</h2>
        <Youtube videoId={id} opts={opts} />
        <div className="videoComments">
          <h4>Add a Comment:</h4>
          <hr />
          <form onSubmit={handleComment}>
            <label htmlFor="name">
              Name:
              <br />
              <input type="text" id="name" onChange={handleTextChange} />
            </label>
            <br />
            <label htmlFor="comment">
              Comment:
              <br />
              <input type="text" id="comment" onChange={handleTextChange} />
            </label>
            <br />
            <button
              type="submit"
              onClick={handleComment}
              className="btn btn-danger"
            >
              Send
            </button>
          </form>
          <hr />
          <h4>Comments</h4>
          <ul>
            {comments.map((commenter) => {
              return (
                <li key={generateId()}>
                  {commenter.name}:{commenter.comment}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className="relatedVids">
        <p>Related Videos</p>
        <RelatedVideos />
      </div>
    </div>
  );
}

export default Video;
