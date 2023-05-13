import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBtn = styled.button`
  padding: 10px;
  margin: 0px 10px;
  border-radius: 7px;
  border: 1px;
  background-color: #20c997;
  font-size: 18px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #438a6f;
  }
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <NavBtn>ToDo-List</NavBtn>
      </Link>
      <Link to="/coin">
        <NavBtn>Coin-Converter</NavBtn>
      </Link>
      <Link to="/ge">
        <NavBtn>Green-Effort</NavBtn>
      </Link>
      <Link to="/calculator">
        <NavBtn>Calculator</NavBtn>
      </Link>
      <Link to="/timer">
        <NavBtn>Timer</NavBtn>
      </Link>
    </NavWrapper>
  );
};

export default NavBar;
