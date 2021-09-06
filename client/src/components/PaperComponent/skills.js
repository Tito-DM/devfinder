import React, { Fragment } from "react";
import { useStyles } from "./paperStyle";
import { FaUniversity } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const SkillsPaper = ({ title, color }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.btnInfo}>
        <Button variant="contained" color={color} size="large">
          {title}
        </Button>
      </div>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.main}>
      
        </div>
      </Paper>
    </Fragment>
  );
};

export default SkillsPaper;
