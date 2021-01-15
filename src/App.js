import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import Header from "./components/header";
import Navigation from "./components/navigation";

const theme = {
  background: "#000000",
  color: "#ffffff",
  navigationBackgroundColor: "#0d9ddb",
};

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header show={show} setShow={setShow} />
      <Navigation show={show} setShow={setShow} />
    </ThemeProvider>
  );
};

export default App;
