import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ArticleCard from "../components/ArticleCard";
import articleApi from "../api/articleApi";

type Article = {
  id: string;
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

const Top: React.FC = () => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleApi.get("/").then((res) => {
      setArticles(res.data.posts);
    });
  }, []);

  if (!articles.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.root}>
      {articles.map((article: Article, index: number) => (
        <ArticleCard
          id={article.id}
          title={article.title}
          text={article.text}
          createdAt={article.createdAt._seconds}
          imageUrl={
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2450&q=80"
          }
          key={index.toString()}
        />
      ))}
    </div>
  );
};

export default Top;
