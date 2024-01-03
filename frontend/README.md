Installation
Clone the Repository:

bash
Copy code
git clone <repository_url>
cd frontend
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm start
The frontend development server will start running on http://localhost:3000.

How It Works
Access the Application:

Open your web browser and navigate to http://localhost:3000.
Enter the Number of Stocks:

You will be prompted to enter the number of stocks you want to track (max 20). Input a number and press Enter.
View Live Stock Prices:

The application will display a table with live stock prices.
The prices are updated every second based on the configured refresh intervals.
Change the Number of Stocks:

You can change the number of stocks at any time by entering a new number in the input field.
Application Structure
src/App.js:

Contains the main component of the application.
Fetches live stock prices from the backend at regular intervals.
Displays the stock data in a table.
src/index.js:

Entry point of the application.
Renders the main App component into the root HTML element.
Customization
Styling:

Bootstrap 5 styles have been applied to enhance the visual appearance. Feel free to customize the styles based on your preferences.
Interval and API URL:

The interval for fetching stock data is set to 1 second (1000 milliseconds) by default. You can adjust this in App.js.
The backend API URL is set to http://localhost:5000/api/stocks by default. Update it if your backend is running on a different address or port.