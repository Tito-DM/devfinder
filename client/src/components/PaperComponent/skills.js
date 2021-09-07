import React, { Fragment } from "react";
import { useStyles } from "./paperStyle";
import { GiSkills } from "react-icons/gi";
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
        <Button
          variant="contained"
          color={color}
          style={{ background: "#009688", color: "white" }}
          size="large"
        >
          {title}
        </Button>
      </div>
      <Paper className={classes.paper} elevation={3}>
      <div className={classes.main}>
          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <GiSkills size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
                C/c++
              </span>
              <span>Expirience: 1</span>
            </div>
          </div>




          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <GiSkills size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
               JavaScript
              </span>
              <span>Expirience: 2</span>
            </div>
          </div>


          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <GiSkills size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
               Electronica
              </span>
              <span>Expirience: 2</span>
            </div>
          </div>





        </div>
        </Paper>
    </Fragment>
  );
};

export default SkillsPaper;
