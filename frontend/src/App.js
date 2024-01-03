
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [n, setN] = useState(0);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stocks");
        console.log("Fetched data:", response.data);

        const updatedStocks = response.data.slice(0, n);
        console.log("Updated stocks:", updatedStocks);

        setStocks(updatedStocks);
        console.log("Updated stocks state:", stocks);
      } catch (error) {
        console.error("Error fetching stocks:", error.message);
      }
    };

    const intervalId = setInterval(() => {
      fetchStocks();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [n, stocks]);

  return (
    <>
      <div className="container mt-4">
      <label htmlFor="stockCount" className="form-label">
        Enter number of stocks (max 20):
      </label>
      <input
        type="number"
        id="stockCount"
        className="form-control"
        value={n}
        onChange={(e) => setN(Math.min(parseInt(e.target.value), 20))}
      />

      {n === 0 ? (
        <p className="mt-3 text-danger">Please enter any stock number.</p>
      ) : (
        <>
          <h2 className="mt-3">Stocks</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Symbol</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map(stock => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td style={{ color: stock.openPriceChange >= 0 ? 'green' : 'red' }}>
                    ${stock.openPrice.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
    </>
  );
};

export default App;
