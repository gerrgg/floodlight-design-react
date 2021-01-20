import React from "react";

const Navigation = ({ show, setShow }) => {
  const style = show
    ? {
        opacity: "100%",
        zIndex: 1,
      }
    : {
        opacity: "0%",
        zIndex: -1,
      };

  const links = [
    "slider-section",
    "dropdown-section",
    "list-section",
    "api-section",
  ];

  return (
    <nav id="navigation" style={style}>
      <ul>
        {links.map((link) => (
          <li>
            <button
              className="button"
              href={`#${link}`}
              onClick={() => {
                setShow(false);
                const e = document.getElementById(link);

                if (e) {
                  window.location.hash = link;
                  e.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link[0].toUpperCase() + link.substring(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
