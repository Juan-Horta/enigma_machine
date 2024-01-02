import React, { useState } from 'react';
import './RotorDisplay.css'; // Ensure you have this CSS file in the same directory

const RotorDisplay = () => {
  // State for each rotor position
  const [rotorPositions, setRotorPositions] = useState([1, 1, 1]);

  // Handler to change rotor position
  const updateRotorPosition = (index, delta) => {
    setRotorPositions(
      rotorPositions.map((pos, i) => {
        if (i === index) {
          let newPos = pos + delta;
          if (newPos > 26) newPos = 1;
          if (newPos < 1) newPos = 26;
          return newPos;
        }
        return pos;
      })
    );
  };

  return (
    <div className="rotor-display">
      {rotorPositions.map((position, index) => (
        <div key={index} className="rotor">
          <div className="rotor-arrow-up" onClick={() => updateRotorPosition(index, 1)}>▲</div>
          <div className="rotor-setting">{position.toString().padStart(2, '0')}</div>
          <div className="rotor-arrow-down" onClick={() => updateRotorPosition(index, -1)}>▼</div>
          <div className="rotor-label">Rotor {index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default RotorDisplay;
