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
      <h2 style={styles.header}>Sliders</h2>
      <p>Move left or right to display an infinite number of possibilites.</p>
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
};

const Intro = () => (
  <div className="intro">
    <div style={styles.section}>
      <h2 style={styles.header}>
        I'M A
        <br />
        FRONTEND <br />
        <span style={{ color: "#0d9ddb" }}> ENGINEER</span> <br />
      </h2>
    </div>
    <div style={styles.section}>
      <h4 style={styles.subheader}>
        I BUILD MY OWN <br /> COMPONENTS
      </h4>
    </div>
  </div>
);

export default Home;
