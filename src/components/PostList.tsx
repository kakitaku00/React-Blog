import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import postsApi from "../api/articleApi";

type Post = {
  title: string;
  body: string;
  imageUrl?: string;
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsApi.get("/").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  if (!posts.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
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
    </div>
  );
};

export default PostList;
