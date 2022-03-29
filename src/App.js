import React from "react";
// import Coin_tracker from "./Coin";
import TodoTemplate from "./components/TodoTemplate";
import { createGlobalStyle } from 'styled-components';
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;