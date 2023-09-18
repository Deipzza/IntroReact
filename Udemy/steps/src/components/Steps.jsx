import { useState } from "react";

import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    step > 1 && setStep((s) => s - 1);
  };
  const handleNext = () => {
    step < 3 && setStep((s) => s + 1);
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>

          <div className="buttons">
            <Button bgColor="#7950F2" textColor="#FFF" onClick={handlePrevious}>
              <span>👈🏼</span> Previous
            </Button>

            <Button bgColor="#7950F2" textColor="#FFF" onClick={handleNext}>
              Next <span>👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
