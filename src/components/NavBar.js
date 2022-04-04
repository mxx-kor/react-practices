import React from "react";
import styled from 'styled-components';

const NavWrapper = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
        background-color: #438A6F;
    }
`

const NavButton = ({ content }) => {
    return <NavBtn>
        {content}
    </NavBtn>
}

const NavBar = () => {

    return (
    <NavWrapper>
        <NavButton content="ToDo-List" />
        <NavButton content="Coin-Converter" />
    </NavWrapper>
    )
}

export default NavBar