import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

type Article = {
  id: string;
  title: string;
  text: string;
  createdAt: number;
  imageUrl?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: 180,
    },
    sub: {
      padding: "16px",
      justifyContent: "space-between",
    },
    tag: {
      display: "flex",
      flexWrap: "wrap",
      "& > *:not(:first-of-type)": {
        marginLeft: "6px",
      },
    },
    create: {
      flexShrink: 0,
      marginLeft: "auto",
    },
  })
);

const PostCard = ({ id, title, text, createdAt, imageUrl }: Article) => {
  const classes = useStyles();
  return (
    <Card>
      <Link
        underline="none"
        color="inherit"
        component={RouterLink}
        to={`/${id}`}
      >
        <CardActionArea component="div" disableRipple>
          <CardMedia className={classes.media} image={imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* 本文を省略し表示 */}
              {text.length >= 30 ? text.substr(0, 30) + "..." : text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.sub}>
        {/* タグ */}
        <div className={classes.tag}>
          <Chip label="FrontEnd" component="a" href="#" clickable />
          <Chip label="Blog" component="a" href="#" clickable />
        </div>
        {/* 日付 */}
        <div className={classes.create}>
          <span>
            {/* ゼロ埋めで表示 */}
            {new Date(createdAt * 1000).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
