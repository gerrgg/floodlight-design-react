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
      <div className="container">
        <Intro />
        <SliderSection />
      </div>
    </div>
  );
};

const Intro = () => (
  <div className="intro">
    <div style={styles.section}>
      <h2 style={styles.header}>
        I'M A
        <br />
        FRONTEND <br />
        <Blue>ENGINEER</Blue> <br />
      </h2>
    </div>
    <div style={styles.section}>
      <h4 style={styles.subheader}>
        I BUILD MY OWN <br /> COMPONENTS WITH
        <br /> <Blue>REACT / SCSS</Blue>
      </h4>
    </div>
  </div>
);

const SliderSection = () => (
  <div id="slider-section" style={{ height: 500 }}>
    <h2 style={styles.header}>Sliders</h2>
    <p>
      <Blue underline={true}>Click or swipe</Blue> to see an infinite number of
      possibilites.
    </p>
    <Slider>
      {Array(10)
        .fill("")
        .map((a, i) => (
          <img
            key={Math.random(1000)}
            src={`https://place-hold.it/150x100/fff/?text=${i}`}
            alt="placeholder img"
          />
        ))}
    </Slider>
  </div>
);

const Blue = ({ children, underline }) => (
  <span
    style={{
      color: "#0d9ddb",
      borderBottom: underline ? "1px solid #0d9ddb" : "none",
      paddingBottom: underline ? "2px" : "0px",
      cursor: underline ? "pointer" : "0px",
    }}
  >
    {children}
  </span>
);

export default Home;
