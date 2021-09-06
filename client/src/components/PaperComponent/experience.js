import React, { Fragment } from "react";
import { useStyles } from "./paperStyle";
import { FaBuilding } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";





const ExperiencePaper = ({ title, color }) => {
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
          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <FaBuilding size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
                Tswane University of Technology
              </span>
              <span className={classes.uniSubText}>
                Computer System Engineering
              </span>
              <span>12-05-2017</span>
            </div>
          </div>




          <div className={classes.paperContent}>
            <div className={classes.profileIcon}>
              <FaBuilding size="50px" />
            </div>
            <div className={classes.textContent}>
              <span className={classes.uniText}>
                Universidade Nova de Lisboa
              </span>
              <span className={classes.uniSubText}>
                Electrical & computer Engimeering
              </span>
              <span>12-05-2017</span>
            </div>
          </div>
        </div>

        
      </Paper>
    </Fragment>
  );
};

export default ExperiencePaper;
