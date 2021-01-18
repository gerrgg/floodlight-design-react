import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  root: {
    margin: "0 auto",
  },
};

const Slider = ({ children }) => {
  // If window is bigger than container (900) then set to 900 else window width
  const width = window.innerWidth > 900 ? 900 : window.innerWidth;

  const [translateX, setTranslateX] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const ref = useRef(null);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log(eventData);
      // swipes are inverted so we reverse them again - left === right
      slide(eventData.dir.toLowerCase() === "left" ? "right" : "left");
    },
    trackTouch: true,
    trackMouse: true,
  });

  /**
   * Get the combined width of all the items in the slider
   */
  useEffect(() => {
    /**
     * We set a timeout to ensure the DOM loads by the time the effect runs
     */
    setTimeout(() => {
      let width = 0;

      if (ref) {
        const items = ref.current.offsetParent.children;
        for (let item of items) {
          if (item.className === "item") {
            width += item.clientWidth;
          }
        }
      }

      setInnerWidth(width);
    }, 500);
  }, [setInnerWidth]);

  /**
   * Move the slider or weve hit our limit
   * @param {string} direction
   */
  const slide = (direction) => {
    // if the current x position + next move > the total width, set to 0
    if (Math.abs(translateX - width) > innerWidth) {
      setTranslateX(0);
    } else {
      // if we're going left and x + move is greater than 0, put to end else move back
      direction === "left"
        ? setTranslateX(
            translateX + width > 0 ? -(innerWidth - width) : translateX + width
          )
        : setTranslateX(translateX - width);
    }
  };

  return (
    <div className="slider" style={styles.root} {...handlers}>
      <Nav slide={slide} />
      {children.map((child, i) => {
        return (
          <div
            key={Math.random(1000)}
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
