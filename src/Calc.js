import React, { useState } from "react";
import "../src/Calc.css";
const Calc = () => {
  const [first, setFirst] = useState("");
  function numb(e) {
    const input = e.target.name;

    // Check if the current input is an operator (+, -, *, /)
    const isOperator = "+-*/".includes(input);

    // Check if there's already an operator in the 'first' state
    const lastCharIsOperator = /[+\-*/]/.test(first[first.length - 1]);

    // If the current input is an operator and the last character is also an operator,
    // do nothing
    if (isOperator && lastCharIsOperator) {
      return;
    }

    // Otherwise, append the input to the 'first' state
    setFirst(first.concat(input));
  }

  function clear() {
    setFirst("");
  }

  function result() {
    setFirst("");
    setFirst(eval(first));
  }
  function back() {
    setFirst(first.slice(0, -1));
  }
  function handleInputChange(e) {
    setFirst(e.target.value);
  }
  return (
    <div className="calculator">
      <h1 className="calculator-title">Calculator</h1>
      <input
        type="text"
        value={first}
        className="input-field"
        onChange={handleInputChange}
      />
      <div className="button-container">
        <button onClick={clear} className="calc-button" id="clear">
          Clear
        </button>
        <button onClick={back} className="calc-button">
          C
        </button>
        <button onClick={numb} name="/" className="calc-button">
          %
        </button>
        <button name="7" onClick={numb} className="calc-button">
          7
        </button>
        <button name="8" onClick={numb} className="calc-button">
          8
        </button>
        <button name="9" onClick={numb} className="calc-button">
          9
        </button>
        <button onClick={numb} name="*" className="calc-button">
          *
        </button>
        <button name="4" onClick={numb} className="calc-button">
          4
        </button>
        <button name="5" onClick={numb} className="calc-button">
          5
        </button>
        <button name="6" onClick={numb} className="calc-button">
          6
        </button>
        <button onClick={numb} name="-" className="calc-button">
          -
        </button>

        <button name="1" onClick={numb} className="calc-button">
          1
        </button>
        <button name="2" onClick={numb} className="calc-button">
          2
        </button>
        <button name="3" onClick={numb} className="calc-button">
          3
        </button>

        <button onClick={numb} name="+" className="calc-button">
          +
        </button>
        <button name="0" onClick={numb} className="calc-button">
          0
        </button>
        <button name="." onClick={numb} className="calc-button">
          .
        </button>
        <button onClick={result} className="calc-button" id="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calc;
