const Balance = ({ count }) => {
  return (
    <div className="balance">
      <h2>Monthly Overview</h2>
      <div className="balance-info">
        <h3>Total Budget: ${count}</h3>
        <h3>Available: ${count}</h3>
        <h3>Total Spent: ${count}</h3>
      </div>
    </div>
  );
};

export default Balance;
