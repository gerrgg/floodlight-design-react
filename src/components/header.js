import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import logo from "../logo.svg";
import Menu from "../components/menu";

const useStyles = createUseStyles({
  root: {
    position: "relative",
    padding: 15,
    background: ({ theme }) => theme.background,
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Header = ({ show, setShow }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <header className={classes.root}>
      <Logo />
      <Menu show={show} setShow={setShow} />
    </header>
  );
};

const Logo = () => (
  <a href="/">
    <img src={logo} alt="Floodlight Design" />
  </a>
);

export default Header;
