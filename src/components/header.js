import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Headroom from "react-headroom";

const Header = ({ show, setShow }) => (
  <Headroom>
    <header id="header">
      <Logo />
      <Menu show={show} setShow={setShow} />
    </header>
  </Headroom>
);

const Menu = ({ show, setShow }) => {
  return (
    <button id="menuButton" onClick={() => setShow(!show)}>
      {Array(2)
        .fill("")
        .map((i) => (
          <span className={`bar ${show ? "show" : null}`}></span>
        ))}
    </button>
  );
};

const Logo = () => (
  <Link id="logo" to="/">
    <img src={logo} alt="Floodlight Design" />
  </Link>
);

export default Header;
