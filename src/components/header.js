import React from "react";
import logo from "../logo.svg";
import Menu from "../components/menu";

const Header = ({ show, setShow }) => (
  <header id="header">
    <Logo />
    <Menu show={show} setShow={setShow} />
  </header>
);

const Logo = () => (
  <a href="/">
    <img src={logo} alt="Floodlight Design" />
  </a>
);

export default Header;
