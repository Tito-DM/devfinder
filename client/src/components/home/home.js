import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DrawerFunc from "./drawer";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";

function Home(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <FaList/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
          <form>
            <div className={classes.formContainer}>
              <label for="email">Email</label>
              <input className={classes.inputText} type="text" />
              <label for="password">Password</label>
              <input className={classes.inputText} type="password" />
            </div>
            <Button variant="contained" color="primary">
              Login
            </Button>
            <Link to="!#" className={classes.linkOpts}>
              ou Create an Accout
            </Link>
          </form>
        </div>
      </main>
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

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
