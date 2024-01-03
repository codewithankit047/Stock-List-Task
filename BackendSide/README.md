This is the backend component of the stock tracking web application. It is responsible for fetching stock data from the Polygon API, periodically updating stock prices, and exposing an API endpoint for the frontend to retrieve stock information.

Installation
Clone the Repository:

bash
Copy code
git clone <repository_url>
cd backend
Install Dependencies:

bash
Copy code
npm install
Set Up Polygon API Key:

Ensure you have a valid Polygon API key. Replace 'YOUR_POLYGON_API_KEY' in server.js with your actual key.
Run the Server:

bash
Copy code
npm start
The server will start running on http://localhost:5000.

Port Status
The backend server is configured to run on port 5000 by default. If needed, you can change the port in the server.js file.
Example JSON Data
The backend fetches stock data from the Polygon API and simulates periodic updates. Here is an example of the JSON data structure:

json
Copy code
[
  {
    "symbol": "AAPL",
    "openPrice": 150.25,
    "refreshInterval": 3
  },
  {
    "symbol": "GOOGL",
    "openPrice": 2500.75,
    "refreshInterval": 5
  },
  // ... (more stock entries)
]
symbol: The stock symbol.
openPrice: The initial stock price.
refreshInterval: The interval (in seconds) at which the stock price is updated.
API Endpoint
The backend exposes the following API endpoint to fetch stock data:

GET /api/stocks:

Returns an array of stock objects.
Example:

bash
Copy code
curl http://localhost:5000/api/stocks
Response:

json
Copy code
[
  {
    "symbol": "AAPL",
    "openPrice": 153.45,
    "refreshInterval": 3
  },
  // ... (more stock entries)
]