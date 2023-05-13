import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Coin from '../routes/Coin';
import Home from '../routes/Home';
import GreenEffort from '../routes/GreenEffort';
import Calculator from '../routes/Calculator';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import Timer from '../routes/Timer';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
    background: #e9ecef;
    }
`;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/coin">
          <Coin />
        </Route>
        <Route path="/ge">
          <GreenEffort />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
