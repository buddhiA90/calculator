import { useState } from "react";
import { operators } from "../constant";
const Calculator = () => {
  const [operator, setOperator] = useState("+");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [operationCount, setOperationCount] = useState(0);
  const [outPut, setOutPut] = useState("");

  const calculate = (operatorVal) => {
    if (!(inputValue1 && inputValue2)) {
      return;
    }
    let result = NaN;
    let number1 = Number(inputValue1);
    let number2 = Number(inputValue2);
    switch (operatorVal) {
      case operators.SUM:
        result = number1 + number2;
        break;
      case operators.DED:
        result = number1 - number2;
        break;
      case operators.MUL:
        result = number1 * number2;
        break;
      case operators.DIV:
        result = number1 / number2;
        break;
    }
    setOutPut(result);
    setOperationCount(operationCount + 1);
    setOperator(operatorVal);
  };
  const reset = () => {
    setOperator(operators.SUM);
    setInputValue1("");
    setInputValue2("");
    setOutPut("");
  };
  return (
    <div className="calculator">
      <div className="header">
        <h1>Calculator</h1>
      </div>
      <div className="calInner">
        <p data-testid="operation-count">
          Total operation performed: <span>{operationCount}</span>
        </p>
        <div className="calBody">
          <input
            data-testid="input1"
            placeholder="Eg:1"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            type="number"
          />{" "}
          <label data-testid="active-operator">{operator}</label>
          <input
            data-testid="input2"
            placeholder="Eg:2"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            type="number"
          />
          <div className="calBtn">
            {Object.keys(operators).map((key) => (
              <button
                key={key}
                data-testid={`btn-calc-${key}`}
                onClick={() => calculate(operators[key])}
              >
                {operators[key]}
              </button>
            ))}
          </div>
          <div className="calBottom">
            <button data-testid="btn-reset" onClick={reset} className="reset">
              Reset
            </button>
            {outPut !== "" && (
              <p data-testid="output-val">
                Result: <span>{outPut.toString()}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
