import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "#2c2c2c"
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

  line:{
    position: "absolute",
    top: "50% !important",
    width: "24em",
    margin: "0 auto",
    borderRight: "2px solid rgba(255,255,255,.75)",
    fontSize: "large",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    transform: "translateY(-50%)", 
},

animTypewriter: {
  animation: "$typewriter 4s steps(44) 4s infinite normal both, $blinkTextCursor 500ms steps(44) infinite normal;"
},
"@keyframes typewriter":{
  "from": {width: 0},
  "to": {width: "24em"}
},
"@keyframes blinkTextCursor": {
  "from": {borderRightColor:" rgba(255,255,255,.75)"},
  "to" : {borderRightColor: "transparent"}
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

 
}));
