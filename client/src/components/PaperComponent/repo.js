import React, { Fragment } from "react";
import { useStyles } from "./paperStyle";
import { RiGitRepositoryFill} from "react-icons/ri";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const RepoPaper = ({ title, color }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.btnInfo}>
        <Button
          variant="contained"
          style={{ background: "green", color: "white" }}
          size="large"
        >
          {title}
        </Button>
      </div>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.main}>
          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <RiGitRepositoryFill size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
                Bingo Book Project
              </span>
              <span className={classes.uniSubText}>
                javascript
              </span>
              <span>12-05-2017</span>
            </div>
          </div>




          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <RiGitRepositoryFill size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
                Home Automation System
              </span>
              <span className={classes.uniSubText}>
                c/c++
              </span>
              <span>12-05-2017</span>
            </div>
          </div>
        </div>

        
      </Paper>

    </Fragment>
  );
};

export default RepoPaper;
