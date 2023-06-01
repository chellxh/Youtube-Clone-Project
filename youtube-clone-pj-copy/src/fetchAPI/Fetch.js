import axios from "axios";

/* FETCH DATA USING API KEY */

async function fetchData(data) {
  try {
    let resource = data.resource ? data.resource : "";
    let configObj = {
      url: `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}${resource}`,
      ...data,
    };

    let result = await axios(configObj);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
