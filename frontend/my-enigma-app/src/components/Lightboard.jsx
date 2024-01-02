import React from 'react';
import './Lightboard.css'; // Make sure to create this CSS file

const Lightboard = ({ litLetter }) => {
  // Define the rows of the lightboard as they appear in the Enigma machine
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'],
    ['P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L']
  ];

  return (
    <div className="lightboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="lightboard-row">
          {row.map((letter) => (
            <div key={letter} className={`lightboard-letter ${litLetter === letter ? 'lit' : ''}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lightboard;
