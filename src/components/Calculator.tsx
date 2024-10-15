import { useState } from 'react';

function Calculator() {

  const [num1, setNum1] = useState<string>(''); 
  const [num2, setNum2] = useState<string>(''); 
  const [result, setResult] = useState<number | null>(null); 

  const calculate = (operation: string) => {
    const number1 = parseFloat(num1);  
    const number2 = parseFloat(num2);  
    let calcResult: number = 0;      

    switch (operation) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        calcResult = number1 / number2;
        break;
      case '**':
        calcResult = power(number1, number2);
        break;
      default:
        break;
    }

    setResult(calcResult); 
  };

  const power = (base: number, exponent: number) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  };

  const clearInputs = () => {
    setNum1('');  
    setNum2('');  
    setResult(null); 
  };

  return (
    <div className="calculator-function">
      <div className="input-boxes">
        <input
          type="text"
          id="first-number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="Enter first number"
        />
        <input
          type="text"
          id="second-number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="Enter second number"
        />
      </div>

      <div className="buttons">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
        <button onClick={() => calculate('**')}>^</button>
        <button onClick={clearInputs}>Clear</button>
      </div>

      <p id="output" style={{ color: result !== null && result < 0 ? 'red' : 'black' }}>
        {result !== null ? result : ''}
      </p>
    </div>
  );
}

export default Calculator;
