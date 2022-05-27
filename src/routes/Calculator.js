import React from "react";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
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
`

const Output = styled.div`
`

const Calculator = () => {
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
                            <div className="previous-operand">number</div>
                            <div className="current-operand">number</div>
                        </Output>
                        <button className="span-two">AC</button>
                        <button>DEL</button>
                        <button>÷</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>*</button>
                        <button>4</button> 
                        <button>5</button> 
                        <button>6</button> 
                        <button>+</button>
                        <button>7</button> 
                        <button>8</button> 
                        <button>9</button> 
                        <button>-</button>
                        <button>.</button> 
                        <button>0</button> 
                        <button className="span-two">=</button>     
                    </CalculatorGrid>
                </CalculatorWrapper>
            </CalculatorTemplate>
        </motion.div>
    )
}

export default Calculator