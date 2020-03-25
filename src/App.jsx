import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Tournament } from "./pages/Tournament";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>

      <Route path="/about" exact>
        <About />
      </Route>

      <Route path="/tournament" exact>
        <Tournament />
      </Route>
    </BrowserRouter>
  );
};

export default App;
