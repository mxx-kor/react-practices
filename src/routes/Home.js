import React from "react";
import TodoTemplate from "../components/TodoTemplate";
import { createGlobalStyle } from 'styled-components';
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import { TodoProvider } from "../TodoContext";
import { motion } from "framer-motion";


const GlobalStyle = createGlobalStyle`
body {
    background: #e9ecef;
}
`;

const Home = () => {
    return (
        <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 0.95}}
            exit={{display: 'none'}}
        >
            <TodoProvider>
            <GlobalStyle />
                <TodoTemplate>
                    <TodoHead />
                    <TodoList />
                    <TodoCreate />
                </TodoTemplate>
            </TodoProvider>
        </motion.div>
    )
}

export default Home