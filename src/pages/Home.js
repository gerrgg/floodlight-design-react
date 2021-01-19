import React, { useEffect, useState } from "react";
import Slider from "../components/slider";
import Dropdown from "../components/Dropdown";
import Color from "../components/Color";
import Filter from "../components/Filter";
import Repository from "../components/Repository";

import axios from "axios";

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
    margin: "2rem",
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
        <FilterSection />
        <AboutSection />
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
        <Color color="#71f971">ENGINEER</Color> <br />
      </h2>
    </div>
    <div style={styles.section}>
      <h4 style={styles.subheader}>
        I BUILD <br /> COMPONENTS WITH
        <br /> <Color color="#0d9ddb">REACT / SCSS</Color>
      </h4>
    </div>
  </div>
);

const SliderSection = () => {
  const color = "rgb(238, 65, 195)";

  return (
    <div id="slider-section" style={styles.component}>
      <Color color={color}>Click or swipe</Color>

      <h2 style={styles.header}>Sliders</h2>
      <Qoute
        qoute="Have no fear of perfection - you'll never reach it."
        author="Salvador Dali"
        color={color}
      />

      <Slider color={"rgb(238, 65, 195)"}>
        {Array(10)
          .fill("")
          .map((a, i) => (
            <img
              key={i}
              src={`https://place-hold.it/150x100/fff/?text=${i}`}
              alt="placeholder img"
            />
          ))}
      </Slider>
    </div>
  );
};

const DropdownSection = () => {
  const [color, setColor] = useState("#ee4141");

  return (
    <div id="dropdown-section" style={{ height: 500 }}>
      <Color color={color}>Pick and Choose</Color>
      <h2 style={{ ...styles.header }}>Dropdowns</h2>
      <Qoute
        qoute="I have not failed. I've just found 10,000 ways that won't work."
        author="Thomas A. Edison"
        color={color}
      />

      <Dropdown color={color} setColor={setColor}>
        {[
          "Black",
          "Red",
          "Green",
          "Blue",
          "Violet",
          "Pink",
          "Yellow",
          "Orange",
        ]}
      </Dropdown>
    </div>
  );
};

const FilterSection = () => {
  const color = "#ffc0e9";
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const baseURL = `https://swapi.dev/api/people/`;

    const response = await axios.get(baseURL);

    if (response.data) {
      setPeople(response.data.results);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div id="list-section" style={{ height: 500, marginTop: 250 }}>
      <Color color={color}>Search and Click</Color>
      <h2 style={styles.header}>FILTERING LISTS</h2>
      <Qoute
        qoute="Success is stumbling from failure to failure with no loss of enthusiasm."
        author="Winston S. Churchill"
        color={color}
      />
      <Filter data={people} color="#ffc0e9" />
      <p>
        Thank you{" "}
        <Color color={color}>
          <a href="https://swapi.dev/documentation#intro" rel="nofollow">
            Star Wars API
          </a>
        </Color>
      </p>
    </div>
  );
};

const AboutSection = () => {
  const color = "#00ff9f";
  const [repository, setRepository] = useState(null);

  const getRepository = async () => {
    const baseURL = `https://api.github.com/repos/gerrgg/floodlight-design-react`;

    const response = await axios.get(baseURL);

    if (response.data) {
      setRepository(response.data);
    }
  };

  useEffect(() => {
    getRepository();
  }, []);

  return (
    <div id="list-section" style={{ height: 500, marginTop: 500 }}>
      <Color color={color}>About this Project</Color>
      <h2 style={styles.header}>USING API'S</h2>
      <Qoute
        qoute="Only those who dare to fail greatly can ever achieve greatly."
        author="Robert F. Kennedy"
        color={color}
      />
      <Repository color={color} repository={repository} />
    </div>
  );
};

const Qoute = ({ qoute, author, color }) => (
  <p style={styles.description}>
    <span className="quote">{qoute}</span>
    <Color color={color ? color : ""}>
      <br />
      <b className="author" style={{ opacity: 0.75, paddingTop: ".5rem" }}>
        {`-  ${author}`}
      </b>
    </Color>
  </p>
);

export default Home;
