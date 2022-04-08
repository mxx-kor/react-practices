import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
    .react-calendar { 
        width: 400px;
        max-width: 100%;
        background-color: #fff;
        color: #222;
        border-radius: 8px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.125em;
        margin-bottom: 30px;
       }
       .react-calendar__navigation button {
        color: #222;
        min-width: 44px;
        background: none;
        font-size: 16px;
        margin-top: 8px;
       }
       .react-calendar__navigation button:enabled:hover,
       .react-calendar__navigation button:enabled:focus {
        background-color: #f8f8fa;
       }
       .react-calendar__navigation button[disabled] {
        background-color: #f0f0f0;
       }
       abbr[title] {
        text-decoration: none;
       }
       /* .react-calendar__month-view__days__day--weekend {
        color: #d10000;
       } */
       .react-calendar__tile:enabled:hover,
       .react-calendar__tile:enabled:focus {
        background: #9AB0A6;
        color: #222;
        border-radius: 6px;
       }
       .react-calendar__tile--now {
        background: #2E81FB;
        border-radius: 6px;
        font-weight: bold;
        color: #fff;
       }
       .react-calendar__tile--now:enabled:hover,
       .react-calendar__tile--now:enabled:focus {
        background: #2E81FB;
        border-radius: 6px;
        font-weight: bold;
        color: #black;
       }
       .react-calendar__tile--hasActive:enabled:hover,
       .react-calendar__tile--hasActive:enabled:focus {
        background: #9AB0A6;
       }
       .react-calendar__tile--active {
        background: #374B42;
        border-radius: 6px;
        font-weight: bold;
        color: white;
       }
       .react-calendar__tile--active:enabled:hover,
       .react-calendar__tile--active:enabled:focus {
        background: #374B42;
        color: white;
       }
       .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #f8f8fa;
       }
`

const GreenEffort = () => {
    const [value, onChange] = useState(new Date());
    const [num, setNum] = useState(0);
    const [commits, setCommit] = useState([]);

    const plus = () => {
        setNum(num + 1);
    }
    const minus = () => {
        setNum(num - 1);
    }
    const commit = () => {
        setCommit((current) => [...current, `${moment(value).format("YYYY년 MM월 DD일")}`])
    }
    const onClickDay = (value) => {
        onChange(value)
    }

    return (
        <>
            <NavBar />
            <GlobalStyle />
            <GeWrapper>
                <h1>Green your Effort!</h1>
                <Calendar value={value} onClickDay={onClickDay} tileContent={({ date, view }) => {
                    let html = [];
                    if (commits.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="dot"></div>);
                    }
                    return (
                    <>
                        <div>{html}</div>
                    </>
                    );}} 
                />
                <div>
                    {moment(value).format("YYYY년 MM월 DD일")} 
                </div>
                <div>
                    <button onClick={minus}>-</button>
                    <input type='number' defaultValue={num} />
                    <button onClick={plus}>+</button>
                </div>
                <button onClick={commit} value={value}>commit!</button>
            </GeWrapper>
        </>
    )
}

export default GreenEffort