import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  line: {
    display: "block",
    width: "100%",
    height: "4px",
    borderBottom: "3px solid",
    transform: "skew(-45deg)",
    borderColor: ({ theme }) => theme.color,
  },
  button: {
    position: "absolute",
    top: -4,
    right: 0,
    height: "100%",
    width: "66px",
    backgroundColor: "transparent",
    border: "none",
    color: "inherit",
    cursor: "pointer",
  },
});

const Menu = ({ show, setShow }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <button className={classes.button} onClick={() => setShow(!show)}>
      {Array(2)
        .fill("")
        .map((i) => (
          <Menubar
            classes={classes}
            style={{ margin: `${show ? "10" : "4"}px 0` }}
          />
        ))}
    </button>
  );
};

const Menubar = ({ classes, style }) => (
  <span className={classes.line} style={style}></span>
);

export default Menu;
