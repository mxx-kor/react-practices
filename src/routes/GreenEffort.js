import React from "react";
import { createGlobalStyle } from 'styled-components';
import NavBar from "../components/NavBar";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const GreenEffort = () => {
    return (
        <>
            <NavBar />
            <GlobalStyle />
            <h1>GE</h1>
        </>
    )
}

export default GreenEffort