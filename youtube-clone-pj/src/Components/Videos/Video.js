import Youtube from "react-youtube";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

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
      let results = axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_KEY}&id=${id}&part=snippet,player`
      );
      console.log(results.data.item[0]);
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
        <h1>{video?.snippet?.title}</h1>
        <Youtube videoId={id} opts={opts} />
        <div className="videoComments">
          <h4>Add a Comment:</h4>
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
            <Button variant="contained">Send</Button>
          </form>
          <hr />
          <ul>
            {comments.map((commenter) => {
              return (
                <li key={id}>
                  {commenter.name}:{commenter.comment}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div></div>
    </div>
  );
}

export default Video;
