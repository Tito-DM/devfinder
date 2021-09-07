import React from "react";
import AppBarComponent from "../AppBar/appbar";
import DrawerFunc from "../Drawer/drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./profileStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SocialPaperComponent from "../socialPaperComponent/socialpapercomponent";
import EducationPaper from "../PaperComponent/education";
import SkillsPaper from "../PaperComponent/skills";
import { Divider, Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ExperiencePaper from "../PaperComponent/experience";
import RepoPaper from "../PaperComponent/repo";

const Profile = (props) => {
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
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <SocialPaperComponent
                title="Contribution"
                color="pramary"
                socials="facebook"
              />
            </Grid>
            <Grid item xs={3}>
              <SocialPaperComponent
                title="Articles"
                color="pramary"
                socials="youtube"
              />
            </Grid>
            <Grid item xs={3}>
              <SocialPaperComponent
                title="Contibutions"
                color="pramary"
                socials="twitter"
              />
            </Grid>

            <Grid item xs={3}>
              <SocialPaperComponent
                title="Profile Visualization"
                color="pramary"
                socials="twitter"
              />
            </Grid>

            <Grid item xs={12}>
              <Paper className={`${classes.paper} `}>
                <div className={classes.mainInfo}>
                  <div className={classes.profileAvatar}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={classes.avatarWidth}
                    />
                  </div>

                  <div>
                    <h1
                      style={{
                        letterSpacing: "2px",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      Tito Domingos Muanda
                    </h1>
                    <div className={classes.profileSubTextContainer}>
                      <span className={classes.subText}>website: </span>
                      <span className={classes.subTextAnswer}>{"www.myweb.com"}</span>
                      </div>

                      <div className={classes.profileSubTextContainer}>
                      <span className={classes.subText}>status: </span>
                      <span className={classes.subTextAnswer}>{"Student"}</span>
                      </div>

                      <div className={classes.profileSubTextContainer}>
                      <span className={classes.subText}>Location: </span>
                      <span className={classes.subTextAnswer}>{"LB"} </span>
                      </div>

                      <div className={classes.profileSubTextContainer}>
                      <span className={classes.subText}>Company: </span>
                      <span className={classes.subTextAnswer}>{"MyBits"}</span>
                      </div>

                    <Divider />
                    <div>
                      <h3>Bio</h3>
                      <p>
                        lAliqua officia elit cillum pariatur eiusmod. Dolore ad
                        laboris cillum cillum laborum qui dolore anim duis
                        tempor non. Incididunt aliquip occaecat sint aliqua
                        commodo sunt sint. Ipsum aliquip enim et reprehenderit
                        ipsum eu Lorem exercitation eiusmod in mollit.
                      </p>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <EducationPaper title="Education" color="secondary" />
            </Grid>
            <Grid item xs={6}>
              <SkillsPaper title="Skills" color="" />
            </Grid>

            <Grid item xs={6}>
              <ExperiencePaper title="Expirience" color="primary" />
            </Grid>
            <Grid item xs={6}>
              <RepoPaper title=" GitHub Repos" color="" />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Profile;
