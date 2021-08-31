import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./appbarStyle";
import { FaList } from "react-icons/fa";

const AppBarComponent = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <FaList />
        </IconButton>
        <Typography variant="h6" noWrap>
          <p class={`${classes.line}  ${classes.animTypewriter}`}>
            <span className={classes.topheading}>1. console.</span>
            <samp className={classes.symbols}>log</samp>
            <span>&#40;</span>
            <span className={classes.propsCode}>
              &#34; HELLO WORLD  &#34;
            </span>
            <span>&#41;</span>&#59;
          </p>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
