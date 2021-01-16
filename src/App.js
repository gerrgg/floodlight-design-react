import React, { useState } from "react";
import "normalize-css";
import "./scss/_main.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <Header show={show} setShow={setShow} />
      <Navigation show={show} setShow={setShow} />
    </div>
  );
};

export default App;
