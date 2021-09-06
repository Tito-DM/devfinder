import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import DrawerFunc from "../Drawer/drawer";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./signupStyle";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AppBarComponent from "../AppBar/appbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import image from "../../asset/img/hardware.png"
import axios from "axios";
import {connect} from "react-redux"
import {setAlert} from "../../action/alert"
import Alert from '@material-ui/lab/Alert';

function SignUp(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //formdata state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  //checkbox state
  const [checkbox, setCheckbox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBoxChange = (e) => {
    setCheckbox(!checkbox);
    if (e.target.value) setShowPassword(!showPassword);
  };

  //handle from submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    //check if password match
    if (formData.password === formData.passwordConfirmation) {
      
    } else {
      props.setAlert("Password do not match", "red")
    }
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
        <div className={classes.mainContent}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
          <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
              <label for="name">UserName</label>
              <input
                id="name"
                className={classes.inputText}
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <label id="email" for="email">
                Email
              </label>
              <input
                className={classes.inputText}
                type="text"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <label for="password">Password</label>
              <input
                id="password"
                className={classes.inputText}
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedA"
                    value={checkbox}
                    checked={checkbox}
                    onChange={handleCheckBoxChange}
                    color="primary"
                  />
                }
                label="View Password"
              />
              <label for="password_Confirmation">Password Confirmation</label>
              <input
                id="password_Confirmation"
                className={classes.inputText}
                type="password"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                name="passwordConfirmation"
              />
            </div>

            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
            <Link to="!#" className={classes.linkOpts}>
              ou login
            </Link>
          </form>
        </div>
      </main>
      <div className={classes.bkgElectronics}>
       <img src={image} alt="electronic" width="100%" height="100%"/>
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

SignUp.propTypes = {
  window: PropTypes.func,
};

export default connect(null,{setAlert})(SignUp);
