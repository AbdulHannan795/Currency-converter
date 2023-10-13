import React, { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [result, setResult] = useState(null);

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 112.14,
    INR: 74.98,
    AUD: 1.31,
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };
  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };
  const convertCurrency=()=>{
    const convertedAmount= (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    setResult(convertedAmount.toFixed(2));
  };
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="converter">
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="equals">=</span>
      <input type="text" value={result || ""} readOnly/>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
        {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={convertCurrency}>Convert</button>
      </div>
    </div>
  );
};

export default App;
