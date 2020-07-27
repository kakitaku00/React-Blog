import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

type Post = {
  title: string;
  text: string;
  createdAt: any;
  imageUrl?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: 180,
    },
    sub: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "12px",
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
      marginLeft: "12px",
    },
  })
);

const PostCard = ({ title, text, createdAt, imageUrl }: Post) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text.length >= 30 ? text.substr(0, 30) + "..." : text}
          </Typography>
          <div className={classes.sub}>
            <div className={classes.tag}>
              <Chip label="FrontEnd" />
              <Chip label="Blog" />
            </div>
            <div className={classes.create}>
              <span>
                {new Date(createdAt * 1000).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
