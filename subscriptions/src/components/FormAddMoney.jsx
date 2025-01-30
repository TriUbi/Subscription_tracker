import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      setError("Please enter a budget amount");
      return;
    }

    const amount = Number(input);
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount greater than 0");
      return;
    }

    setError("");
    setCount(amount);
    setIsValid(true);
  };

  return (
    <div className="form-add-money">
      <h2>Set Your Budget</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="budget">Enter your monthly budget</label>
          <input
            type="number"
            id="budget"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter amount (e.g. 300)"
            min="0"
            step="0.01"
            autoFocus
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-btn">
          Start Tracking
        </button>
      </form>
    </div>
  );
};

export default FormAddMoney;
