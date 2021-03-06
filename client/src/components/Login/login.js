import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import DrawerFunc from "../Drawer/drawer";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBarComponent from "../AppBar/appbar";
import axios from "axios";
import image from "../../asset/img/hardware.png";

function Login(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //set login state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //handle from submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/v1/auth/login", formData, {
      headers: "application/json",
    });

    console.log(res);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerFunc />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerFunc />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1
          style={{
            letterSpacing: "4px",
            textAlign: "center",
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          Connect with Others Developers & Engineers
        </h1>
        <div className={classes.mainContent}>
          <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
              <label for="email">Email</label>
              <input
                className={classes.inputText}
                type="text"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <label for="password">Password</label>
              <input
                className={classes.inputText}
                type="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
            <Link to="!#" className={classes.linkOpts}>
              ou Create an Accout
            </Link>
          </form>
        </div>
      </main>
      <div className={classes.bkgElectronics}>
        <img src={image} alt="electronic" width="100%" height="100%" />
      </div>

      <div className={classes.codeStyleContainer}>
        <span className={classes.topheading}>
          <span className={classes.symbols}>&lt;</span>Toolbar
          <span className={classes.symbols}>&gt;</span>
        </span>
        <p>
          {" "}
          <span className={classes.symbols}>&lt;</span>
          <span className={classes.topheading}>IconButton</span>
          <p>
            <span className={classes.propsCode}>className</span>={" "}
            <span>&#123;</span> classes.menuButton<span>&#125;</span>
            <span className={classes.symbols}>&gt;</span>
          </p>
          <p>
            <span className={classes.propsCode}>onClick</span>=
            <span>&#123;</span>handleDrawerToggle<span>&#125;</span>
            <span className={classes.symbols}>&gt;</span>
          </p>
        </p>
        Menu
        <p className={classes.topheading}>
          <span className={classes.symbols}>&lt;</span>/IconButton{" "}
          <span className={classes.symbols}>&gt;</span>
        </p>
        <p className={classes.topheading}>
          {" "}
          <span className={classes.symbols}>&lt;</span>/Toolbar{" "}
          <span className={classes.symbols}>&gt;</span>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  window: PropTypes.func,
};

export default Login;
