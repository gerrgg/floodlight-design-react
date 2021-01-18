import React, { useState } from "react";
import Slider from "../components/slider";
import Dropdown from "../components/Dropdown";

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
  description: {
    margin: "1rem",
  },
  component: {
    height: `${350 * 2}px`,
    marginTop: 250,
  },
};

const Home = () => {
  return (
    <div className="content home" style={styles.root}>
      <div className="container">
        <Intro />
        <SliderSection />
        <DropdownSection />
      </div>
    </div>
  );
};

const DropdownSection = () => {
  const [color, setColor] = useState("red");

  return (
    <div id="slider-section" style={{ height: 500 }}>
      <span style={{ color: color }}>Pick and choose</span>

      <h2 style={styles.header}>Dropdowns</h2>
      <Qoute
        qoute="One drop of wine is enough to redden a whole glass of water."
        author="Victor Hugo"
      />

      <Dropdown color={color} setColor={setColor}>
        {[
          "Black",
          "Red",
          "Green",
          "Blue",
          "Violet",
          "Pink",
          "Purple",
          "Yellow",
          "Orange",
        ]}
      </Dropdown>
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
  <div id="slider-section" style={styles.component}>
    <Blue>Click or swipe</Blue>

    <h2 style={styles.header}>Sliders</h2>
    <Qoute
      qoute="The problem with introspection is that it has no end."
      author="Philip K. Dick"
    />

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

const Qoute = ({ qoute, author }) => (
  <p style={styles.description}>
    <span className="quote">{`"${qoute}" - `}</span>
    <b className="author">{author}</b>
  </p>
);

export default Home;
