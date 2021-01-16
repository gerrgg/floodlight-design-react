import React, { useState } from "react";

const Home = () => {
  const styles = {
    root: {
      height: `${250 * 2}px`,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    header: {
      textTransform: "uppercase",
      textAlign: "center",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "30px",
      letterSpacing: "10px",
      lineHeight: "50px",
    },
  };
  return (
    <div class="content home">
      <div style={styles.root}>
        <h2 style={styles.header}>
          WE ARE <br />
          STRATEGIC <br />
          TECHNICAL <br />
          EXPERTS
        </h2>
      </div>
      <div style={styles.root}>
        <h2 style={styles.header}>
          WE ARE <br />
          STRATEGIC <br />
          TECHNICAL <br />
          EXPERTS
        </h2>
      </div>
    </div>
  );
};

export default Home;
