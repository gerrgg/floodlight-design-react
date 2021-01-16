import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize-css";
import "./scss/_main.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Home from "./pages/Home";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header show={show} setShow={setShow} />
        <Navigation show={show} setShow={setShow} />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
