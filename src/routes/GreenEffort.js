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
       .color1 {
        margin: 0 auto;
        height: 10px;
        width: 10px;
        background-color: #20c997;
        border-radius: 50%;
        display: flex;
       }
       .color2 {
        margin: 0 auto;
        height: 10px;
        width: 10px;
        background-color: #00A172;
        border-radius: 50%;
        display: flex;
       }
       .color3 {
        margin: 0 auto;
        height: 10px;
        width: 10px;
        background-color: #007A4E;
        border-radius: 50%;
        display: flex;
       }
       .color4 {
        margin: 0 auto;
        height: 10px;
        width: 10px;
        background-color: #00552E;
        border-radius: 50%;
        display: flex;
        }
        .color5 {
        margin: 0 auto;
        height: 10px;
        width: 10px;
        background-color: #00320F;
        border-radius: 50%;
        display: flex;
        }
    .now {
        color: #868e96;
    }
    .numBtn {
        margin: 10px 3px;
        padding: 5px 15px;
        background-color: #e9ecef;

        font-family: "Noto Sans KR", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
        color: #20c997;
        border: 2px solid #20c997;
        border-radius: 10px;
        cursor: pointer;
    }
    .numBtn:active,
    .numBtn:hover,
    .numBtn:focus {
        background-color: #20c997;
        color: white;
        outline: 0;
    }
    .numBtn:disabled {
    opacity: 0.5;
    }
    .commitBtn {
        padding: 5px 20px;
        background-color: #20c997;
        color: white;
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
    }
    .commitBtn:active,
    .commitBtn:hover {
        background-color: #00552E;
        color: white;
    }
`


const GreenEffort = () => {
    const [value, onChange] = useState(new Date());
    const [num, setNum] = useState(1);
    const [commits, setCommit] = useState([]);

    const commit = (e) => {
        setCommit((current) => [...current, {
            day: moment(value).format("YYYY-MM-DD"),
            hour: e.target.value
        }])
    }
    const onClickDay = (value) => {
        onChange(value)
    }
    const commitClick = (e) => {
        setNum(e.target.value)
    }

    return (
        <>
            <NavBar />
            <GlobalStyle />
            <GeWrapper>
                <h1>✅Green your Effort!</h1>
                <Calendar value={value} onClickDay={onClickDay} tileContent={({ date }) => {
                    if (commits.find((x) => x.day === moment(date).format("YYYY-MM-DD"))) {
                    return (
                    <>
                        <div className={"color" + commits.find(x => x.day === moment(date).format("YYYY-MM-DD")).hour}></div>
                    </>
                    );  
                    }
                }}
                />
                <div className='now'>
                    {moment(value).format("YYYY년 MM월 DD일")} 
                </div>
                <div className='now'>
                    투자한 시간을 선택하세요. 
                </div>
                <newBtnWrapper>
                    <button className='numBtn' onClick={commitClick} value={1}>1</button>
                    <button className='numBtn' onClick={commitClick} value={2}>2</button>
                    <button className='numBtn' onClick={commitClick} value={3}>3</button>
                    <button className='numBtn' onClick={commitClick} value={4}>4</button>
                    <button className='numBtn' onClick={commitClick} value={5}>5</button>
                </newBtnWrapper>
                <div>
                    <button className='commitBtn' onClick={commit} value={num}>commit!</button>
                </div>
            </GeWrapper>
        </>
    )
}

export default GreenEffort