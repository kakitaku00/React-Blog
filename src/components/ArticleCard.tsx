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
  imageUrl?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    chipWrapper: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "1rem",
      "& > *:not(:first-of-type)": {
        marginLeft: "6px",
      },
    },
  })
);

const PostCard = ({ title, text, imageUrl }: Post) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text.length >= 30 ? text.substr(0, 30) + "..." : text}
          </Typography>
          <div className={classes.chipWrapper}>
            <Chip label="FrontEnd" />
            <Chip label="Blog" />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;