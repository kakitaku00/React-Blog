import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import "./App.css";

import postsApi from "./api/postsApi";

type Post = {
  title: string;
  body: string;
  imageUrl?: string;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsApi.get("/").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Header />
      {posts.map((post: Post, index: number) => (
        <PostCard
          title={post.title}
          body={post.body}
          imageUrl={
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80"
          }
          key={index.toString()}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
