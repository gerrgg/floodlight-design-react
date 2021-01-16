import React from "react";

const Navigation = ({ show }) => {
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
    <nav id="navigation" style={style}>
      <h1>im content</h1>
    </nav>
  );
};

export default Navigation;
