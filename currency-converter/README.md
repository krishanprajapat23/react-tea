# Currency Converter App

A simple and user-friendly currency converter built with **React** and **Vite**. This app allows you to convert amounts between different currencies using real-time exchange rates.

## Features

- Convert amounts between multiple currencies.
- Swap "From" and "To" currencies with a single click.
- Real-time exchange rates fetched from an API.
- Clean and responsive UI.

## How to Use

1. **Enter Amount**: Type the amount you want to convert in the "From" input field.
2. **Select Currencies**:
   - Choose the "From" currency (the currency you're converting from).
   - Choose the "To" currency (the currency you're converting to).
3. **Swap Currencies**: Click the "Swap" button to switch the "From" and "To" currencies.
4. **Convert**: Click the "Convert" button to see the converted amount.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` to use the app.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Bootstrap**: For styling and responsive design.
- **Currency API**: For fetching real-time exchange rates.

## API Used

This app uses the [currency-api](https://github.com/fawazahmed0/currency-api) to fetch real-time exchange rates.

Example API Endpoint:
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

## Folder Structure

```
currency-converter/
├── public/
├── src/
│   ├── components/        # Reusable components
│   ├── hooks/             # Custom hooks
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to open an issue or submit a pull request.
