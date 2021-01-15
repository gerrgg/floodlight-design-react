import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  navigation: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: "-1",
    top: 0,
    backgroundColor: ({ theme }) => theme.navigationBackgroundColor,
    transition: "opacity .5s",
  },
  closeButton: {
    fontSize: "4rem",
    backgroundColor: "transparent",
    border: "none",
    color: ({ theme }) => theme.color,
    position: "absolute",
    right: 0,
    top: 0,
    cursor: "pointer",
  },
});

const Navigation = ({ show, setShow }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const style = show
    ? {
        opacity: "100%",
        zIndex: 1,
      }
    : {
        opacity: "0%",
        zIndex: -1,
      };

  return (
    <div className={classes.navigation} style={style}>
      <h1>im content</h1>
      <button className={classes.closeButton} onClick={() => setShow(!show)}>
        &times;
      </button>
    </div>
  );
};

export default Navigation;
