// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [n, setN] = useState(0);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stocks');
        console.log('Fetched data:', response.data);
  
        const updatedStocks = response.data.slice(0, n);
        console.log('Updated stocks:', updatedStocks);
  
        setStocks(updatedStocks);
        console.log('Updated stocks state:', stocks);
      } catch (error) {
        console.error('Error fetching stocks:', error.message);
      }
    };
  
    const intervalId = setInterval(() => {
      fetchStocks();
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [n, stocks]);
  

  return (
    <div>
      <label htmlFor="stockCount">Enter number of stocks (max 20): </label>
      <input
        type="number"
        id="stockCount"
        value={n}
        onChange={(e) => setN(Math.min(parseInt(e.target.value), 20))}
      />

      <h2>Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            {stock.symbol} - ${stock.openPrice.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
