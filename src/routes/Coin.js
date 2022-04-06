import React, { useEffect, useState } from "react";
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import NavBar from "../components/NavBar";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const CoinWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 36px;
        color: #343a40;
      }
    .canBuy {
    color: #20c997;
    font-size: 20px;
    margin-top: 10px;
    font-weight: bold;
  }
`

function Coin() {
    const[loading, setLoading] = useState(true);
    const[coins, setCoins] = useState([]);
    const[currency, setCurrency] = useState([]);
    const[index, setIndex] = useState(0);
    const [selected, setSelected] = useState([]);
    const [amount, setAmount] = useState(0);
    
    const onSelect = (e) => {
        setIndex(e.target.value);
        setSelected(coins[e.target.value])
    }

    const onChange = (e) => setAmount(e.target.value)

    const getCoinData = () => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json.slice(0, 100));
            setSelected(json[0]);
            setLoading(false);
        })
    }

    const get_Currency_Data = () =>{
        fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD")
        .then((respose) => respose.json())
        .then((json) => {
            setCurrency(json[0].cashBuyingPrice);
        });
    }

    useEffect(() => {
        getCoinData();
        get_Currency_Data();
    }, [])
    return (
        <>
            <NavBar />
            <CoinWrapper>
                <GlobalStyle />
                <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
                {loading ? <strong>Loading...</strong> : <select value={index} onChange={onSelect}>
                    {coins.map((coin, idx) => <option value={idx} key={idx}>{coin.name} ({coin.symbol})</option>)}
                </select>}
                <h4>{loading ? "" : `${selected.symbol} PRICE`}</h4>
                <div>{loading ? "" : `${Math.round(selected.quotes.USD.price * currency).toLocaleString('ko-KR')} KRW`}</div>
                <div>{loading ? "" : `${selected.quotes.USD.price.toFixed(2)} USD`}</div>
                <small>{loading ? "" : "투자금을 입력하시면 구입할 수 있는 코인개수를 계산합니다"}</small>
                <div>
                    {loading ? "" : <label>USD</label>}
                    {loading ? "" : <input type='number' value={amount} onChange={onChange} />} 
                </div>
                <div className="canBuy">{loading ? "" : `= ${selected.symbol} ${amount / selected.quotes.USD.price}개`}</div>
            </CoinWrapper>
        </>
    )
}

export default Coin;