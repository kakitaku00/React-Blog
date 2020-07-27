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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "30px",
      backgroundColor: "#eee",
      borderRadius: "4px",
    },
    formControl: {
      width: "50%",
    },
    card: {
      padding: "30px",
      "& > *:not(:first-of-type)": {
        marginTop: "32px",
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      "& > *:not(:first-of-type)": {
        marginLeft: "16px",
      },
    },
  })
);

const Create = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
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
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="select-label">
              Category
            </InputLabel>
            <Select labelId="select-label" onChange={handleChange} displayEmpty>
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
          />
          <TextField label="Text" fullWidth multiline rows="8" />
          <div className={classes.buttons}>
            <Button variant="contained" color="primary">
              投稿
            </Button>
            <Button variant="contained">下書き</Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Create;
