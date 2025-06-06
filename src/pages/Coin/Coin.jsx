import React, { useContext, useEffect, useState } from 'react'
import "./Coin.css"
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';

const Coin = () => {
  
  const {coinId} = useParams();
  const [coinData, setCoinData] = useState();
  const {currency} = useContext(CoinContext)

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-tTivhvPf3v55SQB7Pnge3jiW'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }


  useEffect(()=> {
    fetchCoinData();
  },[currency])


  if(coinData){
  return (
      <div className='coin'>
      <div className="coin-name">
       <img src={coinData.image.large} alt="" /> 
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
      </div>
      <div className="coin-info">
       <ul>
        <li>Crypto Market Rank</li>
        <li>{coinData.market_cap_rank}</li>
       </ul>
       <ul>
        <li>Current Price</li>
        <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
       </ul>
       <ul>
        <li>Market Cap</li>
        <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
       </ul>
       <ul>
        <li>24 Hour high</li>
        <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
       </ul>
       <ul>
        <li>24 Hour low</li>
        <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
       </ul>
      </div>
    </div>
  )
    } 
    else {
      return(
      <div className='spinner'>
      <div className="spin"></div>
    </div>
      )
    }
      
    
}

export default Coin