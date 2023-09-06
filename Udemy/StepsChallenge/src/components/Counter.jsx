import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStep = (operation) => {
    operation === "+" && setStep((s) => s + 1);
    operation === "-" && setStep((s) => s - 1);
  };

  const handleCount = (operation) => {
    operation === "+" && setCount((s) => s + step);
    operation === "-" && setCount((s) => s - step);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleStep("-")}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => handleStep("+")}>+</button>
      </div>

      <br />

      <div>
        <button onClick={() => handleCount("-")}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => handleCount("+")}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default Counter;
