import axios from "axios";

const postsApi = axios.create({
  baseURL:
    "https://asia-northeast1-react-blog-92a07.cloudfunctions.net/posts/api",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

export default postsApi;
