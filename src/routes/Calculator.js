import React, {useReducer} from "react";
import CalBtn from "../components/CalBtn";
import OperationBtn from "../components/OperationBtn";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}
body {
    background: #e9ecef;
}
`;

const CalculatorTemplate = styled.div`
    width: 512px;
    height: 400px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    margin: 0 auto;

    margin-top: 30px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`
const CalculatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CalculatorGrid = styled.div`
    display: grid;
    margin-top: 2rem;
    grid-template-columns: repeat(4, 6rem);
    grid-templlate-rows: minmax(7rem, auto) repeat(5, 6rem);

    .span-two {
        grid-column: span 2;
    }
    button {
        cursor: pointer;
        font-size: 2rem;
        border: 1px solid white;
    }
    button:hover, button:focus {
        background-color: rgba(255, 255, 255, .75);
    }
`

const Output = styled.div`
    grid-column: 1 / -1;
    background-color: rgba(0, 0, 0, .75);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    padding: .75rem;
    word-wrap: break-word;
    word-break: break-all;

    .previous-operand {
        color: rgba(225, 225, 225, .75);
        font-size: 1.5rem;
    }
    .current-operand {
        color: white;
        font-size: 2.5rem;
    }
`

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

const reducer = (state, { type, payload }) => {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }
    }
}

const Calculator = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

    // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 }})

    return (
        <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 0.95}}
            exit={{display: 'none'}}
        >
            <CalculatorTemplate>
                <CalculatorWrapper>
                    <GlobalStyle />
                    <CalculatorGrid>
                        <Output>
                            <div className="previous-operand">{previousOperand} {operation}</div>
                            <div className="current-operand">{currentOperand}</div>
                        </Output>
                        <button className="span-two">AC</button>
                        <button>DEL</button>
                        <OperationBtn operation="÷" dispatch={dispatch} />
                        <CalBtn digit="1" dispatch={dispatch} />
                        <CalBtn digit="2" dispatch={dispatch} />
                        <CalBtn digit="3" dispatch={dispatch} />
                        <OperationBtn operation="*" dispatch={dispatch} />
                        <CalBtn digit="4" dispatch={dispatch} />
                        <CalBtn digit="5" dispatch={dispatch} />
                        <CalBtn digit="6" dispatch={dispatch} />
                        <OperationBtn operation="+" dispatch={dispatch} />
                        <CalBtn digit="7" dispatch={dispatch} />
                        <CalBtn digit="8" dispatch={dispatch} />
                        <CalBtn digit="9" dispatch={dispatch} />
                        <OperationBtn operation="-" dispatch={dispatch} />
                        <CalBtn digit="." dispatch={dispatch} />
                        <CalBtn digit="0" dispatch={dispatch} />
                        <button className="span-two">=</button>     
                    </CalculatorGrid>
                </CalculatorWrapper>
            </CalculatorTemplate>
        </motion.div>
    )
}

export default Calculator