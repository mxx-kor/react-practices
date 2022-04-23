import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;