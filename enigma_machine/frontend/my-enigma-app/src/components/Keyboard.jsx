import React from 'react';
import './Keyboard.css'; // Make sure to create this CSS file

const Keyboard = ({ onKeySelect }) => {
  // Define the rows of the keyboard as they appear in the Enigma machine
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'],
    ['P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L']
  ];

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className="keyboard-key"
              onClick={() => onKeySelect(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
