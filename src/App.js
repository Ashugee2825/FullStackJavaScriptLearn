import React, { Component } from "react";
import Button from "./components/Button";
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "0",
      previous: "",
      operator: null,
      nextIsReset: false,
    };
  }

  reset = () => {
    this.setState({ current: "0", previous: "", operator: null, nextIsReset: false });
  };

  addToCurrent = (symbol) => {
    if (["/", "-", "*", "+"].includes(symbol)) {
      this.setState({ previous: this.state.current, operator: symbol, nextIsReset: true });
    } else {
      if (this.state.nextIsReset) {
        this.setState({ current: symbol, nextIsReset: false });
      } else {
        this.setState({ current: this.state.current === "0" ? symbol : this.state.current + symbol });
      }
    }
  };

  calculate = () => {
    if (this.state.operator && this.state.previous) {
      let expression = `${this.state.previous} ${this.state.operator} ${this.state.current}`;
      try {
        this.setState({ current: eval(expression).toString(), previous: "", operator: null, nextIsReset: true });
      } catch (error) {
        this.setState({ current: "Error", nextIsReset: true });
      }
    }
  };

  render() {
    const buttons = [
      { symbol: "C", cols: 1, action: this.reset },
      { symbol: "/", cols: 1, action: this.addToCurrent },
      { symbol: "7", cols: 1, action: this.addToCurrent },
      { symbol: "8", cols: 1, action: this.addToCurrent },
      { symbol: "9", cols: 1, action: this.addToCurrent },
      { symbol: "*", cols: 1, action: this.addToCurrent },
      { symbol: "4", cols: 1, action: this.addToCurrent },
      { symbol: "5", cols: 1, action: this.addToCurrent },
      { symbol: "6", cols: 1, action: this.addToCurrent },
      { symbol: "-", cols: 1, action: this.addToCurrent },
      { symbol: "1", cols: 1, action: this.addToCurrent },
      { symbol: "2", cols: 1, action: this.addToCurrent },
      { symbol: "3", cols: 1, action: this.addToCurrent },
      { symbol: "+", cols: 1, action: this.addToCurrent },
      { symbol: "0", cols: 2, action: this.addToCurrent },
      { symbol: ".", cols: 1, action: this.addToCurrent },
      { symbol: "=", cols: 1, action: this.calculate },
    ];

    return (
      <div className="calculator">
        <input className="result" type="text" value={this.state.current} readOnly />
        <div className="button-container">
          {buttons.map((btn, i) => (
            <Button key={i} symbol={btn.symbol} cols={btn.cols} onClick={btn.action} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;