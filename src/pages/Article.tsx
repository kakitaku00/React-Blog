import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import marked from "marked";
import hljs from "highlight.js";
import articleApi from "../api/articleApi";
import "../../node_modules/github-markdown-css/github-markdown.css";
import "../../node_modules/highlight.js/styles/zenburn.css";
import "../assets/css/markdown.css";

type ArticleData = {
  title: string;
  category: string;
  tag: string;
  text: string;
  createdAt: number;
};

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: "2rem",
  },
});

const Article: React.FC = () => {
  const classes = useStyles();
  const [data, changeData] = useState<ArticleData>();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await articleApi.get(`/${id}`).then((res) => res.data);
    changeData(res.article);
  };

  const compileMarkdown = (text: string) => {
    marked.setOptions({
      langPrefix: "",
      highlight: (code: any, lang: any) => {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });

    return marked(text);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className={classes.title}>{data.title}</h2>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: compileMarkdown(data.text) }}
      ></div>
    </div>
  );
};

export default Article;
