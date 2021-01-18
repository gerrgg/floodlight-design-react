import React, { useState, useEffect, useRef } from "react";
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
  const width = window.innerWidth;
  const [translateX, setTranslateX] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const ref = useRef(null);

  /**
   * Get the combined width of all the items in the slider
   */
  useEffect(() => {
    let innerWidth = 0;

    if (ref) {
      const items = ref.current.offsetParent.children;
      for (let item of items) {
        if (item.className === "item") {
          innerWidth += item.clientWidth;
        }
      }
    }

    setInnerWidth(innerWidth);
  }, [setInnerWidth]);

  /**
   * Move the slider or weve hit our limit
   * @param {string} direction
   */
  const slide = (direction) => {
    if (Math.abs(translateX - width) > innerWidth) {
      setTranslateX(0);
    } else {
      direction === "left"
        ? setTranslateX(translateX + width)
        : setTranslateX(translateX - width);
    }
  };

  return (
    <div className="slider" style={styles.root}>
      <Nav slide={slide} />
      {children.map((child, i) => {
        return (
          <div
            key={i}
            ref={ref}
            className="item"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

const Nav = ({ slide }) => {
  return (
    <div className="nav">
      <button onClick={() => slide("left")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={() => slide("right")}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Slider;
