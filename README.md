# Stock-List-Task
FULLSTACK BACKEND INTERN


Build a web application on react with your choice of backend (preferably nodejs or golang). You should be using the polygon free tier API for fetching all the required data (polygon.io)

The overall task is to display a stocks list and their live price updates. The task is divided into sub tasks mentioned below:

Backend
1. Get the list of any 20 stocks along with their open price from polygon API and assign them a "refreshInterval" lying between 1-5 secs unique for each stock. Store this in a file in the backend.

2. The prices of each of these stocks should be updated with a random value every refreshInterval seconds, make sure that each stock is to be updated at it's own interval.

3. Expose an API to fetch the stock price from this file.

Frontend
1. Take an integer n from the user as an input, not more than 20.

2. Fetch n stocks from the backend and create a short polling system to fetch stock prices from backend every second.

3. Display the data received on the frontend.

You will be evaluated based on the structuring, readability, handling of edge cases, error handling, scalability, UI.



