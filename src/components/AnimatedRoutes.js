import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Coin from "../routes/Coin";
import Home from "../routes/Home";
import GreenEffort from "../routes/GreenEffort";
import Calculator from "../routes/Calculator";
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
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
    )
}

export default AnimatedRoutes;