import React, { useState } from "react";

const Dropdown = ({ children, color, setColor }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setShow(!show)}>
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
