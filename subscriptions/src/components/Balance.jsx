import { useState } from "react";

const Balance = ({ count, subs, setCount }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(count);
  const totalSpent = subs.reduce((acc, sub) => acc + Number(sub.price), 0);
  const available = count - totalSpent;

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(newBudget);

    if (isNaN(amount) || amount < 1) {
      alert("Please enter a valid amount (minimum $1)");
      return;
    }

    setCount(amount);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setNewBudget(value);
    }
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to start over? This will reset your budget and subscriptions."
      )
    ) {
      window.location.reload();
    }
  };

  return (
    <div className="balance">
      <div className="balance-info">
        <div className="budget-row">
          <h3>Budget: ${count.toFixed(2)}</h3>
          <button
            onClick={() => {
              setNewBudget(count);
              setIsEditing(true);
            }}
            className="edit-budget-btn"
            style={{ display: isEditing ? "none" : "block" }}
            aria-label="Edit budget"
          >
            💰
          </button>
        </div>

        {isEditing && (
          <form onSubmit={handleSubmit} className="edit-budget-form">
            <input
              type="number"
              value={newBudget}
              onChange={handleChange}
              min="1"
              step="0.01"
              placeholder="Enter new budget"
              autoFocus
            />
            <div className="edit-budget-buttons">
              <button type="submit" className="confirm-btn">
                ✓
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setIsEditing(false);
                  setNewBudget(count);
                }}
              >
                ✕
              </button>
            </div>
          </form>
        )}

        <h3
          style={{
            color:
              available >= 0 ? "var(--success-color)" : "var(--error-color)",
          }}
        >
          Available: ${available.toFixed(2)}
        </h3>
        <h3>Spent: ${totalSpent.toFixed(2)}</h3>

        {available <= 0 && !isEditing && (
          <div className="add-budget-prompt">
            <p>Your budget is depleted!</p>
            <button onClick={handleReset} className="reset-btn">
              🔄 Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Balance;
