import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CoinTemplate = styled.div`
  width: 512px;
  height: 400px;

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

const CoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 36px;
    color: #343a40;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9ecef;
    width: 100%;
  }
  h4 {
    margin-top: 0px;
    margin-bottom: 5px;
    color: #343a40;
  }
  h5 {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #20c997;
  }
  select {
    width: 200px;
    padding: 0.6em 0.5em;
    border: 3px solid #20c997;
    border-radius: 5px;
  }
  .canBuy {
    color: #20c997;
    font-size: 20px;
    margin-top: 10px;
    font-weight: bold;
  }
  .krw {
    margin-top: 5px;
    width: 150px;
  }
  .usd {
    width: 150px;
  }
  small {
    margin: 15px 0px;
  }
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [amount, setAmount] = useState(0);

  const onSelect = (e) => {
    setIndex(e.target.value);
    setSelected(coins[e.target.value]);
  };

  const onChange = (e) => setAmount(e.target.value);

  const getCoinData = async () => {
    const response = await fetch('https://api.coinpaprika.com/v1/tickers');
    const coinData = await response.json();
    return coinData;
  };

  const get_Currency_Data = async () => {
    const responce = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
    );
    const KRW = await responce.json();
    return KRW;
  };

  useEffect(() => {
    let ignore = false;
    getCoinData().then((coinData) => {
      if (!ignore) {
        setCoins(coinData.slice(0, 100));
        setSelected(coinData[0]);
        setLoading(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    get_Currency_Data().then((KRW) => {
      if (!ignore) {
        setCurrency(KRW[0].cashBuyingPrice);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.95 }}
      exit={{ display: 'none' }}>
      <CoinTemplate>
        <CoinWrapper>
          <h1>The Coins</h1>
          <h4>{loading ? '' : `상위 ${coins.length}개의 코인 정보`}</h4>
          {loading ? (
            <strong>Loading...</strong>
          ) : (
            <select value={index} onChange={onSelect}>
              {coins.map((coin, idx) => (
                <option value={idx} key={idx}>
                  {coin.name} ({coin.symbol})
                </option>
              ))}
            </select>
          )}
          <h5>{loading ? '' : `${selected.symbol} PRICE`}</h5>
          <div className="krw">
            {loading
              ? ''
              : `KRW: ${Math.round(
                  selected.quotes.USD.price * currency
                ).toLocaleString('ko-KR')}원`}
          </div>
          <div className="usd">
            {loading ? '' : `USD: ${selected.quotes.USD.price.toFixed(2)}$`}
          </div>
          <small>
            {loading
              ? ''
              : '투자금을 입력하시면 구입할 수 있는 코인개수를 계산합니다'}
          </small>
          <div>
            {loading ? '' : <label>USD</label>}
            {loading ? (
              ''
            ) : (
              <input type="number" value={amount} onChange={onChange} />
            )}
          </div>
          <div className="canBuy">
            {loading
              ? ''
              : `= ${selected.symbol} ${amount / selected.quotes.USD.price}개`}
          </div>
        </CoinWrapper>
      </CoinTemplate>
    </motion.div>
  );
}

export default Coin;
