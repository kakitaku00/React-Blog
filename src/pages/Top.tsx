import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ArticleCard from "../components/ArticleCard";
import articleApi from "../api/articleApi";

type Article = React.ComponentProps<typeof ArticleCard>;

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
        <ArticleCard {...article} key={index.toString()} />
      ))}
    </div>
  );
};

export default Top;
