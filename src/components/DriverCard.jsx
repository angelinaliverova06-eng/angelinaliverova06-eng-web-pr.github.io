import React from 'react';
import './components.css';

function DriverCard({ driver }) {
  return (
    <div className="driver-card">
      <h3>{driver.name}</h3>
      {driver.quote && (
        <blockquote className="driver-quote">
          "{driver.quote}"
        </blockquote>
      )}
      <p className="driver-bio">{driver.bio}</p>
    </div>
  );
}

export default DriverCard;