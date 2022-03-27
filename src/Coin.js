import React, { useEffect, useState } from "react";

function Coin_tracker() {
    const[loading, setLoading] = useState(true);
    const[coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json.slice(0, 100));
            setLoading(false);
        });
    }, [])
    return <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> : <select>
            {coins.map((coin) => <option key={coin.rank}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>}
    </div>
}
// 내가 가진 돈이 얼마인지 확인해서 몇개의 비트코인이나 이더리움을 가질 수 있는지.

export default Coin_tracker;