import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/" component={HomePage} exact />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
