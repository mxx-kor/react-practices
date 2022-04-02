import { useState, useEffect } from "react";

function Converter({coin}) {
  const [usd, setUSD] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onChange = (event) => {
    setUSD(event.target.value);
  };
  const reset = () => {
    setUSD(0);
  }
  const onClick = () => {
    reset();
    setDisabled((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="USD">USD </label>
        <input
          id="USD"
          value={
            disabled ? usd * coin.quotes['USD'].price: usd
          }
          type="number"
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <div>
        <label htmlFor={coin.symbol}>{coin.symbol} </label>
        <input
          id={coin.symbol}
          value={disabled ? usd : usd / coin.quotes['USD'].price}
          type="number"
          onChange={onChange}
          disabled={!disabled}
        />
      </div>
      <button onClick={onClick}>Convert</button>
    </div>
  );
}

function CoinConverter() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState("-1");
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json.slice(0, 100));
      setLoading(false);
    });
  }, []);
  const onSelect = (event) => {
    setIndex(event.target.value);
    if (event.target.value === "-1"){
      setSelected([]);
    }
    else {
      setSelected(coins[event.target.value]);
    }
  }
  return (
    <div>
      <h1>The Coin Converter {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select value={index} onChange={onSelect}>
            <option key="-1" value="-1">Select Coin</option>
            {coins.map((coin, idx) => (
              <option key={idx} value={idx}>
                {coin.name}
              </option>
            ))}
          </select>
          <hr />
          {index === "-1" ?
            ("Please Select Coin")
            :
            (<Converter coin={selected} />)
          }
        </div>
      )}
    </div>
  );
}

export default CoinConverter;