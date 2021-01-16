import React from "react";

const Menu = ({ show, setShow }) => {
  return (
    <button id="menuButton" onClick={() => setShow(!show)}>
      {Array(2)
        .fill("")
        .map((i) => (
          <Menubar style={{ margin: `${show ? "12" : "4"}px 0` }} />
        ))}
    </button>
  );
};

const Menubar = ({ style }) => <span className="bar" style={style}></span>;

export default Menu;
