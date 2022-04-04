import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const CoinWrapper = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 10px
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

function Coin_tracker() {
    const[loading, setLoading] = useState(true);
    const[coins, setCoins] = useState([]);
    const[index, setIndex] = useState(0);
    const [selected, setSelected] = useState([]);
    const [amount, setAmount] = useState(0);
    
    const onSelect = (e) => {
        setIndex(e.target.value);
        setSelected(coins[e.target.value])
    }

    const onChange = (e) => setAmount(e.target.value)

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json.slice(0, 100));
            setSelected(json[0])
            setLoading(false);
        });
    }, [])
    return <CoinWrapper>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> : <select value={index} onChange={onSelect}>
            {coins.map((coin, idx) => <option value={idx} key={idx}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>}
        <div>
            <label>USD</label>
            <input type='number' value={amount} onChange={onChange} />
        </div>
        <div className="canBuy">{loading ? "" : `= ${selected.symbol} ${amount / selected.quotes.USD.price}개`}</div>
    </CoinWrapper>
}

export default Coin_tracker;
