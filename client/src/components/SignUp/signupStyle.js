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
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#271c46",
    clipPath:
      " polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 54% 71%, 29% 56%, 0% 70%, 0 0)",
    height: "100vh",
    color: "white",
  },

  mainContent: {
    position: "absolute",
    width: "40%",
    top: "33%",
    left: "55%",
    fontSize: "large",
    transform: "translate(-50%,-50%)",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  inputText: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  linkOpts: {
    marginLeft: "10px",
    textDecoration: "none",
    fontSize: "medium",
  },
  codeStyleContainer: {
    color: "black",
    position: "absolute",
    top: "67%",
    left: "20%",
    fontSize: "large",
  },
  topheading: {
    color: "#357a38",
  },
  symbols: {
    color: "#1769aa",
  },
  propsCode: {
    color: "#ab003c",
  },
  avatarContainer: {
    margin: "20px",
    textAlign: "center",
  },
  avatarMargin: {
    margin: "0 auto",
  },
  bkgElectronics:{
    width: "700px",
    height: "274px",
    position:"absolute",
    bottom:0,
    right:0,
  },
}));
