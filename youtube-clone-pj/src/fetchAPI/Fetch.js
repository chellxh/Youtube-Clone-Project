import axios from "axios";

/* FETCH DATA USING API KEY */

async function fetchData(configObj) {
  try {
    let result = await axios(configObj);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
export default fetchData;
