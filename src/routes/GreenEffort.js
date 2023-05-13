import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GeTemplate = styled.div`
  width: 512px;
  height: 580px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

  margin: 0 auto;

  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const GeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 30px;
    color: #343a40;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
    width: 100%;
  }
  .react-calendar {
    width: 400px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border: 1px solid #20c997;
    border-radius: 8px;
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
    background: #9ab0a6;
    color: #222;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #2e81fb;
    opacity: 0.8;
    border-radius: 6px;
    font-weight: bold;
    color: #fff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #2e81fb;
    border-radius: 6px;
    font-weight: bold;
    color: black;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #9ab0a6;
  }
  .react-calendar__tile--active {
    background: #374b42;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #374b42;
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
    background-color: #00a172;
    border-radius: 50%;
    display: flex;
  }
  .color3 {
    margin: 0 auto;
    height: 10px;
    width: 10px;
    background-color: #007a4e;
    border-radius: 50%;
    display: flex;
  }
  .color4 {
    margin: 0 auto;
    height: 10px;
    width: 10px;
    background-color: #00552e;
    border-radius: 50%;
    display: flex;
  }
  .color5 {
    margin: 0 auto;
    height: 10px;
    width: 10px;
    background-color: #00320f;
    border-radius: 50%;
    display: flex;
  }
  .now {
    color: #868e96;
  }
  .numBtn {
    margin: 15px 3px;
    padding: 5px 15px;
    background-color: #fff;

    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #20c997;
    border: 2px solid #20c997;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: 0.3s;
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
    padding: 8px 20px;
    margin-top: 5px;
    background-color: #20c997;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: 0.3s;
  }
  .commitBtn:active,
  .commitBtn:hover {
    background-color: #00552e;
    color: white;
  }
`;

const GreenEffort = () => {
  const [value, onChange] = useState(new Date());
  const [num, setNum] = useState(1);
  const [commits, setCommit] = useState(
    localStorage.getItem('green') === null
      ? []
      : JSON.parse(localStorage.getItem('green'))
  );

  const commit = (e) => {
    setCommit((current) => [
      ...current,
      {
        day: moment(value).format('YYYY-MM-DD'),
        hour: e.target.value,
      },
    ]);
    setNum(1);
    localStorage.setItem(
      'green',
      JSON.stringify([
        ...commits,
        {
          day: moment(value).format('YYYY-MM-DD'),
          hour: e.target.value,
        },
      ])
    );
  };
  const onClickDay = (value) => {
    onChange(value);
  };
  const commitHour = (e) => {
    setNum(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.95 }}
      exit={{ display: 'none' }}>
      <GeTemplate>
        <GeWrapper>
          <h1>✅Green your Effort</h1>
          <Calendar
            value={value}
            onClickDay={onClickDay}
            tileContent={({ date }) => {
              if (
                commits.find((x) => x.day === moment(date).format('YYYY-MM-DD'))
              ) {
                return (
                  <>
                    <div
                      className={
                        'color' +
                        commits.find(
                          (x) => x.day === moment(date).format('YYYY-MM-DD')
                        ).hour
                      }></div>
                  </>
                );
              }
            }}
          />
          <div className="now">{moment(value).format('YYYY년 MM월 DD일')}</div>
          <div className="now">투자한 시간을 선택하세요.</div>
          <div>
            <button className="numBtn" onClick={commitHour} value={1}>
              1
            </button>
            <button className="numBtn" onClick={commitHour} value={2}>
              2
            </button>
            <button className="numBtn" onClick={commitHour} value={3}>
              3
            </button>
            <button className="numBtn" onClick={commitHour} value={4}>
              4
            </button>
            <button className="numBtn" onClick={commitHour} value={5}>
              5
            </button>
          </div>
          <div>
            <button className="commitBtn" onClick={commit} value={num}>
              commit!
            </button>
          </div>
        </GeWrapper>
      </GeTemplate>
    </motion.div>
  );
};

export default GreenEffort;
