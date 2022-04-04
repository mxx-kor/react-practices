import React from "react";
import Coin_tracker from "./Coin";
import TodoTemplate from "./components/TodoTemplate";
import { createGlobalStyle } from 'styled-components';
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";
import NavBar from "./components/NavBar";


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <NavBar />
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
      <Coin_tracker />
    </>
  );
}

export default App;