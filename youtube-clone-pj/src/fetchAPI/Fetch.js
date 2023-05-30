import axios from "axios";

/* FETCH DATA USING API KEY */

async function fetchData(userInput) {
  try {
    let results = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${userInput}&maxResults=20&order=viewCount`
    );
    return results.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
