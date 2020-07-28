import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

const articleApi = axios.create({
  baseURL: `${apiURL}/article/api/v1`,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_X_API_KEY,
  },
  responseType: "json",
});

export default articleApi;
