import React, { useState } from "react";

export default function FormAddSubs({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  count,
}) {
  const [error, setError] = useState("");

  const handleSubs = (e) => {
    e.preventDefault();

    // Basic validations
    if (price === "" || Number(price) <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    if (type === "") {
      setError("Please select a service");
      return;
    }

    // Calculate current total
    const currentTotal = subs.reduce((acc, sub) => acc + Number(sub.price), 0);
    const newTotal = currentTotal + Number(price);

    // Validate budget
    if (newTotal > count) {
      setError(
        `Adding this subscription would exceed your budget by $${(
          newTotal - count
        ).toFixed(2)}`
      );
      return;
    }

    // Add subscription
    setError("");
    const data = {
      type: type,
      price: Number(price),
      id: Date.now(),
    };
    setSubs([...subs, data]);
    setType("");
    setPrice("");
  };

  return (
    <div className="add-subscription">
      <h3>Add Subscription</h3>
      <form onSubmit={handleSubs}>
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select
            id="service"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">--Select Service--</option>
            <option value="netflix">Netflix</option>
            <option value="disneyPlus">Disney+</option>
            <option value="spotify">Spotify</option>
            <option value="primeVideo">Prime Video</option>
            <option value="hboMax">HBO Max</option>
            <option value="appleTv">Apple TV+</option>
            <option value="youtubeMusic">YouTube Music</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="$20"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <button type="submit">Add Subscription</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
