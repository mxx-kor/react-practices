import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../node_modules/react-calendar/dist/Calendar.css';
import { createGlobalStyle } from 'styled-components';
import NavBar from "../components/NavBar";
import moment from 'moment';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const GeWrapper = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const GreenEffort = () => {
    const [value, onChange] = useState(new Date());
    const [num, setNum] = useState(0);

    const plus = () => {
        setNum(num + 1);
    }
    const minus = () => {
        setNum(num - 1);
    }

    return (
        <>
            <NavBar />
            <GlobalStyle />
            <GeWrapper>
                <h1>Green your Effort!</h1>
                <Calendar onChange={onChange} value={value} />
                <div className="text-gray-500 mt-4">
                    {moment(value).format("YYYY년 MM월 DD일")} 
                </div>
                <div>
                    <button onClick={plus}>+</button>
                    <input type='number' value={num} />
                    <button onClick={minus}>-</button>
                </div>
                <button>commit!</button>
            </GeWrapper>
        </>
    )
}

export default GreenEffort