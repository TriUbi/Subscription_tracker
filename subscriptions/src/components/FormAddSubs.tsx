import React, { useState } from "react";

export default function FormAddSubs({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
}) {
  const [error, setError] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    setError(false);
    const data = {
      type: type,
      price: price,
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
        <p>Streaming Service</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">--Select Service--</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney+</option>
          <option value="spotify">Spotify</option>
          <option value="primeVideo">Prime Video</option>
          <option value="hboMax">HBO Max</option>
          <option value="appleTv">Apple TV+</option>
          <option value="youtubeMusic">YouTube Music</option>
        </select>
        <p>Monthly Cost</p>
        <input
          type="number"
          placeholder="$20"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button type="submit">Add Subscription</button>
      </form>
      {error && <p className="error">Please fill in all fields correctly</p>}
    </div>
  );
}
