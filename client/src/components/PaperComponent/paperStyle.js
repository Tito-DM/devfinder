import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  btnInfo: {
    position: "absolute",
    marginLeft: "20px",
  
  },

  socialFacebook: {
    borderLeft: " 10px solid blue",
  },

  socialYoutube: {
    borderLeft: " 10px solid red",
  },

  socialTwiter: {
    borderLeft: " 10px solid blue",
  },

  profileIcon: {
    marginLeft: "10px",
  },
  main: {
    paddingTop: "3rem",
    height: "18rem",
    overflowY: "scroll",
    scrollbarColor: "rebeccapurple green",
    scrollbarWidth: "thin",
  },
  listOrientation: {
    display: "flex",
    flexDirection: "row",
    width: "100px ",
  },

 

  test: {
    width: "200px !important",
  },
  paperContent: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "2rem",
  },

  textContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    marginBottom: "10px",
  },
  uniText: {
    fontSize: "medium",
    fontWeight: "bold",
    textTransform: "capitalize",
    letterSpacing: "2px",
  },

  uniSubText: {
    fontSize: "small",
    textTransform: "capitalize",
    letterSpacing: "2px",
    color: "#616161",
  },
  dot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    background: "green",
  },
  listText: {
    textTransform: "capitalize",
    fontWeight: "600",
    letterSpacing: "5px",
  },
}));
