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

  return <nav id="navigation" style={style}></nav>;
};

export default Navigation;
