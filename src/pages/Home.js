import React, { useState } from "react";

const Home = () => {
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
  return (
    <div class="content home" style={styles.root}>
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
};

export default Home;
