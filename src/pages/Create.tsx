import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import articleApi from "../api/articleApi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "30px",
      backgroundColor: "#edf0ff",
      borderRadius: "4px",
    },
    formControl: {
      width: "50%",
    },
    card: {
      padding: "30px",
      "& > *:not(:first-of-type)": {
        marginTop: "30px",
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      "& > *:not(:first-of-type)": {
        marginLeft: "18px",
      },
    },
  })
);

const Create: React.FC = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");

  type ArticleData = {
    title: string;
    category: string;
    tag: string;
    text: string;
    isShow: boolean;
  };

  // 入力項目に空欄がないかチェック
  const emptyCheck = (articleData: ArticleData) => {
    return Object.values(articleData).some((data) => !data);
  };

  const articlePost = async (isShow: boolean) => {
    const articleData = {
      title,
      category,
      tag,
      text,
      isShow,
    };
    if (emptyCheck(articleData)) {
      alert("未入力項目があります");
      return;
    }
    await articleApi
      .post("/", { articleData })
      .then(() => {
        alert("投稿が完了しました");
      })
      .catch(() => {
        alert("投稿が失敗しました");
      });
  };

  return (
    <>
      <h2>投稿画面</h2>
      <div className={classes.root}>
        <Card className={classes.card}>
          <TextField
            label="Title"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setTitle(e.target.value as string)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="select-label">
              Category
            </InputLabel>
            <Select
              labelId="select-label"
              value={category}
              onChange={(e) => setCategory(e.target.value as string)}
              displayEmpty
            >
              <MenuItem value={"Web"}>Web</MenuItem>
              <MenuItem value={"Hobby"}>Hobby</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Tag"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setTag(e.target.value as string)}
          />
          <TextField
            label="Text"
            fullWidth
            multiline
            rows="8"
            onChange={(e) => setText(e.target.value as string)}
          />
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => articlePost(true)}
            >
              公開
            </Button>
            <Button variant="contained">下書き</Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Create;
