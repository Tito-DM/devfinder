import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginTop: "90px",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  btnInfo: {
    position: "absolute",
    left: "25%",
  },

  mainInfo: {
    display: "flex",
    flexDirection: "row",
   
  },
  profileAvatar: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarWidth: {
    width: "300px",
    height: "300px",
  },
}));
