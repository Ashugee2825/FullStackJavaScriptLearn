// Button.js - Custom button component
import React from "react";

const Button = ({ symbol, onClick }) => {
  return (
    <button className={`calc-button ${symbol === "=" ? "equals" : ""}`} onClick={() => onClick(symbol)}>
      {symbol}
    </button>
  );
};

export default Button;