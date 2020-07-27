import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import articleApi from "../api/articleApi";

type Post = {
  title: string;
  text: string;
  imageUrl?: string;
};

const ArticleList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    articleApi.get("/").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  if (!posts.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {posts.map((post: Post, index: number) => (
        <ArticleCard
          title={post.title}
          text={post.text}
          imageUrl={
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80"
          }
          key={index.toString()}
        />
      ))}
    </div>
  );
};

export default ArticleList;
