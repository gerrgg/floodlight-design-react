import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  root: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
  },
};

const Slider = ({ children }) => {
  const width = window.getInnerWidth;

  const [translateX, setTranslateX] = useState(0);

  const slide = (direction) => {};

  return (
    <div className="slider" style={styles.root}>
      <Nav slide={slide} />
      {children.map((child, i) => {
        return (
          <div
            key={i}
            className="item"
            style={{ transform: `translateX(${translateX})` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

const Nav = ({ slide }) => (
  <div className="nav">
    <button>
      <FontAwesomeIcon icon={faChevronLeft} onClick={() => slide("left")} />
    </button>
    <button>
      <FontAwesomeIcon icon={faChevronRight} onClick={() => slide("right")} />
    </button>
  </div>
);

export default Slider;
