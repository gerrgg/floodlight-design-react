import React, { useState } from "react";

const Dropdown = ({ children, color, setColor }) => {
  const [show, setShow] = useState(false);

  const styles = {
    button: {
      border: "1px solid #fff",
      padding: ".5rem 1rem",
      color: color === "black" ? "white" : color,
      fontWeight: 900,
    },
  };

  return (
    <div className="dropdown">
      <button
        className="button"
        onClick={() => setShow(!show)}
        style={styles.button}
      >
        Click to {show ? "close" : "open"}!
      </button>
      <div class="inner">
        <ul
          class={`${show ? "show" : ""} ${color}`}
          style={{ maxHeight: show ? "500px" : 0, backgroundColor: color }}
        >
          {children.map((child) => (
            <li
              key={child}
              onClick={({ target }) => setColor(target.innerText.toLowerCase())}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
