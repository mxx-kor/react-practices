import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const RandomOrder = () => {
  const [inputs, setInputs] = useState(4);
  const [names, setNames] = useState([]);

  const handlePlus = () => {
    if (inputs > 20) alert('너무 많습니다.');
    else {
      setInputs(inputs + 1);
      setNames([]);
    }
  };

  const handleMinus = () => {
    if (inputs < 2) alert('1개 보단 많아야합니다.');
    else {
      setInputs(inputs - 1);
      setNames([]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = [];
    [...e.target.elements].forEach((inputs) => {
      if (inputs.nodeName === 'INPUT') arr.push(inputs.value);
    });
    setNames(arr);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.95 }}
      exit={{ display: 'none' }}>
      <RandomOrderTemplateBlock>
        <h1>랜덤 순서 뽑기</h1>
        <AmountBtnWrapper>
          <AmountBtn onClick={handlePlus}>+</AmountBtn>
          <AmountBtn onClick={handleMinus}>-</AmountBtn>
        </AmountBtnWrapper>
        <h3>{`${inputs}명`}</h3>
        <StyledForm onSubmit={handleSubmit}>
          {[...Array(inputs)].map((_, i) => (
            <input key={i} type="text" placeholder="입력이 필요합니다." />
          ))}
          <SubmitBtn type="submit">submit</SubmitBtn>
        </StyledForm>
        <h3>
          {names.length ? names.sort(() => Math.random() - 0.5).join(' ') : ''}
        </h3>
      </RandomOrderTemplateBlock>
    </motion.div>
  );
};

const RandomOrderTemplateBlock = styled.div`
  width: 512px;
  height: 100%;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

  margin: 0 auto;

  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 36px;
    color: #343a40;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
    width: 100%;
  }

  h3 {
    text-align: center;
    font-size: 20px;
    color: #343a40;
    padding-top: 10px;
    width: 100%;
  }

  input {
    background: white;
    padding-left: 20px;
    height: 30px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #e9ecef, inset -6px -6px 6px white;
    outline: none;
    border: none;
  }
`;

const AmountBtnWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const AmountBtn = styled.button`
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

const SubmitBtn = styled.button`
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

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  input {
    width: 50%;
  }
`;

export default RandomOrder;
