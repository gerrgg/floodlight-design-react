import React from "react";

const Color = ({ children, color }) => (
  <span
    style={{
      color: color,
      fontWeight: "900",
    }}
  >
    {children}
  </span>
);

export default Color;
