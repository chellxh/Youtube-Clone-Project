import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import fetchData from "../../fetchAPI/Fetch";

function RelatedVideos() {
  let { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    try {
      let results = fetchData({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=${id}&type=video&part=snippet`,
      });
      setRelatedVideos(results.data.items);
    } catch (e) {
      console.log(e);
    }
  }, [id]);
  return (
    <div className="relatedVideos">
      {relatedVideos?.length > 0 &&
        relatedVideos.map((video) => {
          return (
            <ul>
              <li key={id}>
                <img src={video.snippet.thumbnails.medium.url} alt={id} />
                <Link to={`/videos/${video.id.videoId}`}>
                  <h3>{video?.snippet?.title}</h3>
                </Link>
              </li>
            </ul>
          );
        })}
    </div>
  );
}

export default RelatedVideos;
