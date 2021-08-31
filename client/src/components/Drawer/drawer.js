import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./drawerStyles";
import Avatar from "@material-ui/core/Avatar";
import { FaHome, FaCode,FaUserAlt,FaRegIdCard } from "react-icons/fa";
const DrawerFunc = () => {
  const classes = useStyles();

  const iconMenu = [
    {
      title: "Home",
      icon: <FaHome size="23px" />,
    },

    {
      title: "Developers",
      icon: <FaCode size="23px" />,
    },

    {
      title: "Login",
      icon: <FaUserAlt size="23px" />,
    },
    {
      title: "Sign Up",
      icon: <FaRegIdCard size="23px" />,
    },
  ];
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <div className={classes.avatarContainer}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={`${classes.large} ${classes.avatarMargin}`}
        />
        <p> PyongYang</p>
      </div>

      <List>
        {iconMenu.map((menu) => (
          <ListItem button key={menu.title}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerFunc;
