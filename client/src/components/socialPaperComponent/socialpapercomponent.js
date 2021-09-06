import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useStyles } from "../PaperComponent/paperStyle";

const SocialPaperComponent = ({ title, color, socials }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper
        className={`${classes.paper} 
      ${socials === "facebook" ? classes.socialFacebook : null}
      ${socials === "youtube" ? classes.socialYoutube : null}
      ${socials === "twitter" ? classes.socialTwiter : null}
      
      `}
      >
        <h2 style={{
         paddingLeft: "10px",
         paddingTop: "10px"
       }}>{title}</h2>
       <h1 style={{
         padding: "10px"
       }}>293</h1>
      </Paper>
    </Fragment>
  );
};

export default SocialPaperComponent;
