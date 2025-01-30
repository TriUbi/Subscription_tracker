import React from "react";

const DisplayItems = ({ subs, onDelete, onEdit }) => {
  const getServiceIcon = (type) => {
    switch (type) {
      case "netflix":
        return "🎬"; // Netflix icon
      case "disneyPlus":
        return "✨"; // Disney+ icon
      case "spotify":
        return "🎵"; // Spotify icon
      case "primeVideo":
        return "📦"; // Prime Video icon
      case "hboMax":
        return "🎭"; // HBO Max icon
      case "appleTv":
        return "🍎"; // Apple TV+ icon
      case "youtubeMusic":
        return "🎼"; // YouTube Music icon
      default:
        return "📺";
    }
  };

  const formatServiceName = (type) => {
    switch (type) {
      case "netflix":
        return "Netflix";
      case "disneyPlus":
        return "Disney+";
      case "spotify":
        return "Spotify";
      case "primeVideo":
        return "Prime Video";
      case "hboMax":
        return "HBO Max";
      case "appleTv":
        return "Apple TV+";
      case "youtubeMusic":
        return "YouTube Music";
      default:
        return type;
    }
  };

  const getServiceColor = (type) => {
    switch (type) {
      case "netflix":
        return "#E50914"; // Netflix red
      case "disneyPlus":
        return "#113CCF"; // Disney+ blue
      case "spotify":
        return "#1DB954"; // Spotify green
      case "primeVideo":
        return "#00A8E1"; // Prime blue
      case "hboMax":
        return "#5822B4"; // HBO purple
      case "appleTv":
        return "#000000"; // Apple black
      case "youtubeMusic":
        return "#FF0000"; // YouTube red
      default:
        return "#666666";
    }
  };

  return (
    <div className="subscriptions-container">
      <h2>Your Subscriptions</h2>
      {subs.length === 0 ? (
        <p className="no-subs">No subscriptions added yet</p>
      ) : (
        <div className="subscriptions-list">
          {subs.map((item) => (
            <div
              key={item.id}
              className="single-item"
              style={{
                borderLeft: `4px solid ${getServiceColor(item.type)}`,
              }}
            >
              <div className="service-info">
                <span className="service-icon" style={{ fontSize: "1.5rem" }}>
                  {getServiceIcon(item.type)}
                </span>
                <span className="service-name">
                  {formatServiceName(item.type)}
                </span>
              </div>
              <div className="price-info">
                <span className="price">
                  ${Number(item.price).toFixed(2)}/mo
                </span>
                <div className="action-buttons">
                  <button
                    onClick={() => onEdit(item.id)}
                    className="edit-btn"
                    aria-label="Edit subscription"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="delete-btn"
                    aria-label="Delete subscription"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayItems;
