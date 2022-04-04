import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/coin">
          <Coin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;