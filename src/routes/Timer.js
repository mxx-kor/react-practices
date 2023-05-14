import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1);
  const intervalRef = useRef(null);
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0'
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  const handleStart = () => {
    clearInterval(intervalRef.current);
    if (timeLeft === 0) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1000);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (timeLeft > 3600000) {
      setTimeLeft(1);
      alert('1시간은 조금..ㅎㅎ');
    }
    if (intervalRef.current !== null && timeLeft <= 0) {
      clearInterval(intervalRef.current);
      setTimeLeft(0);
    }
  }, [timeLeft]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.95 }}
      exit={{ display: 'none' }}>
      <TimerTemplateBlock>
        <Title>Timer</Title>
        <TimesUp>
          {timeLeft <= 0 && (
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '5%' }}
              exit={{ x: '0%' }}
              transition={{ duration: 0.2, repeat: Infinity }}>
              ⏰
            </motion.div>
          )}
        </TimesUp>
        <LeftTime>
          {`${minutes} : ${second}`}
          <SwitchBtnWrapper>
            <SwitchBtn onClick={handleStart}>Start</SwitchBtn>
            <SwitchBtn onClick={handleStop}>Stop</SwitchBtn>
          </SwitchBtnWrapper>
        </LeftTime>
        <MinuteBtnWrapper>
          <MinuteBtn onClick={() => setTimeLeft(timeLeft + 10000)}>
            + 10초
          </MinuteBtn>
          <MinuteBtn onClick={() => setTimeLeft(timeLeft + 1000 * 60)}>
            + 1분
          </MinuteBtn>
          <MinuteBtn onClick={() => setTimeLeft(timeLeft + 5 * (1000 * 60))}>
            + 5분
          </MinuteBtn>
          <MinuteBtn onClick={() => setTimeLeft(timeLeft + 10 * (1000 * 60))}>
            + 10분
          </MinuteBtn>
          <MinuteBtn onClick={() => setTimeLeft(timeLeft + 15 * (1000 * 60))}>
            + 15분
          </MinuteBtn>
          <MinuteBtn onClick={() => setTimeLeft(1)}>RESET</MinuteBtn>
        </MinuteBtnWrapper>
      </TimerTemplateBlock>
    </motion.div>
  );
};

export default Timer;

const TimerTemplateBlock = styled.div`
  width: 512px;
  height: 570px;

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

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #343a40;
  width: 100%;
`;

const MinuteBtnWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const MinuteBtn = styled.button`
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
  &:active,
  &:hover {
    background-color: #20c997;
    color: white;
    outline: 0;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const SwitchBtnWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SwitchBtn = styled.button`
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
  :active,
  :hover {
    background-color: #00552e;
    color: white;
  }
`;

const LeftTime = styled.span`
  margin-top: 4rem;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  color: #343a40;
  padding: 2rem;
  border: 1px solid #e9ecef;
  width: 100%;
`;

const TimesUp = styled.span`
  position: absolute;
  top: 20%;
  right: 44%;
  font-size: 60px;
`;
