import React, { useState } from "react";
import Slider from "../components/slider";

const styles = {
  root: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
  },
  section: {
    height: `${250 * 2}px`,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "10px",
    lineHeight: "50px",
  },
  subheader: {
    letterSpacing: "5px",
    lineHeight: "25px",
  },
};

const Home = () => {
  return (
    <div className="content home" style={styles.root}>
      <Intro />
      <Slider>
        {Array(10)
          .fill("")
          .map((a, i) => (
            <img
              src={`https://place-hold.it/150x100/fff/?text=${i}`}
              alt="placeholder img"
            />
          ))}
      </Slider>
    </div>
  );
};

const Intro = () => (
  <div className="intro">
    <div style={styles.section}>
      <h2 style={styles.header}>
        WE ARE
        <br />
        FRONTEND <br />
        JAVASCRIPT <br />
        ENGINEERS
      </h2>
    </div>
    <div style={styles.section}>
      <h4 style={styles.subheader}>
        WE BUILD OUR OWN <br /> COMPONENTS
      </h4>
    </div>
  </div>
);

export default Home;