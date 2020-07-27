import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ArticleCard from "./ArticleCard";
import articleApi from "../api/articleApi";

type Post = {
  title: string;
  text: string;
  createdAt: any;
  imageUrl?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "30px",
      justifyContent: "space-between",
    },
  })
);

const ArticleList = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      {posts.map((post: Post, index: number) => (
        <ArticleCard
          title={post.title}
          text={post.text}
          createdAt={post.createdAt._seconds}
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
