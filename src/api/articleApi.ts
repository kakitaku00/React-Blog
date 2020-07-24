import axios from "axios";

const postsApi = axios.create({
  baseURL:
    "https://asia-northeast1-react-blog-92a07.cloudfunctions.net/article/api/v1",
  // "http://localhost:5001/react-blog-92a07/asia-northeast1/article/api/v1",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_X_API_KEY,
  },
  responseType: "json",
});

export default postsApi;
