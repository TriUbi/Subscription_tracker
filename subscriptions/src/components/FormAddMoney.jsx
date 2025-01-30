import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setError("Please enter an amount");
      return;
    }
    if (isNaN(input)) {
      setError("Please enter a valid number");
      return;
    }
    if (input <= 0) {
      setError("Please enter an amount greater than 0");
      return;
    }
    setError("");
    setCount(Number(input));
    setIsValid(true);
  };

  return (
    <div className="form-add-money">
      <form onSubmit={handleSubmit}>
        <h2>Add Budget</h2>
        <div className="field">
          <label htmlFor="quantity">What's your monthly budget?</label>
          <input
            type="number"
            id="quantity"
            placeholder="Ex: 300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Start Tracking</button>
      </form>
    </div>
  );
};

export default FormAddMoney;
