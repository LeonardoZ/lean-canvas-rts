import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeanCanvas from "./canvas/LeanCanvas";

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/lean-canvas/:canvasId" exact component={LeanCanvas} />
    </Switch>
  </Router>
);
