import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCount = (operation) => {
    operation === "+" && setCount((s) => s + step);
    operation === "-" && setCount((s) => s - step);
  };

  const handleEditCount = (value) => {
    setCount(value);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          defaultValue={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <br />

      <div>
        <button onClick={() => handleCount("-")}>-</button>
        <input
          type="number"
          defaultValue={0}
          value={count}
          onChange={(e) => handleEditCount(e.target.value)}
        />
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

      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default Counter;
