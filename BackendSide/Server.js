// server.js

const express = require('express');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes

const stocksFile = 'stocks.json';
let stocksData = [];

const fetchInitialStocks = async () => {
  try {
    const response = await axios.get('https://api.polygon.io/v3/reference/tickers', {
      params: {
        apiKey: 'CJUc5Le2zMepfvLD5uVRC3eXqUVpkXnL',
        sort: 'type'
      }
    });

    stocksData = response.data.results.slice(0, 20).map(stock => ({
      symbol: stock.ticker,
      openPrice: Math.random() * 100,
      refreshInterval: Math.floor(Math.random() * 5) + 1
    }));

    fs.writeFileSync(stocksFile, JSON.stringify(stocksData));
  } catch (error) {
    console.error('Error fetching initial stocks:', error.message);
  }
};

const updateStockPrices = () => {
  setInterval(() => {
    stocksData.forEach(stock => {
      stock.openPrice += (Math.random() - 0.5) * 5; // Simulating price change
    });

    fs.writeFileSync(stocksFile, JSON.stringify(stocksData));
  }, 1000);
};

app.get('/api/stocks', (req, res) => {
  res.json(stocksData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  fetchInitialStocks();
  updateStockPrices();
});
