import React, { useState } from "react";
import './UserInput.css';

const initialuserinput = {
  "current-savings": 200,
  "yearly-contribution": 200,
  "expected-return": 7,
  duration: 10,
};

function UserInput({onCalculate}) {
  const [userinput, setUserinput] = useState(initialuserinput);

  const handlesubmit = (e) => {
    e.preventDefault();
    onCalculate(userinput);
  };

  const resetHandler = () => {
    setUserinput(initialuserinput);
  };

  const inputchangehandler = (input, value) => {
    setUserinput((previnput) => {
      return {
        ...previnput,
        [input]: +value,
      };
    });
  };
  return (
    <div>
      <form className="form" onSubmit={handlesubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              value={userinput["current-savings"]}
              onChange={(event) =>
                inputchangehandler("current-savings", event.target.value)
              }
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              value={userinput['yearly-contribution']}
              onChange={(event) =>
                inputchangehandler("yearly-contribution", event.target.value)
              }
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              value={userinput['expected-return']}
              onChange={(event) =>
                inputchangehandler("expected-return", event.target.value)
              }
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              value={userinput['duration']}
              onChange={(event) =>
                inputchangehandler("duration", event.target.value)
              }
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserInput;
