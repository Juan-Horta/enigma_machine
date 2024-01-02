import React, { useState, useEffect } from 'react';
import './Plugboard.css';

const Plugboard = () => {
  const [wires, setWires] = useState({});
  const [lines, setLines] = useState([]);

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const fromPlug = event.dataTransfer.getData('text');
    const toPlug = event.target.id;

    if (fromPlug === toPlug) {
      return;
    }

    setWires(prev => {
      const newWires = { ...prev };

      // Remove any existing connections for the source plug
      if (newWires[fromPlug]) {
        delete newWires[newWires[fromPlug]];
        delete newWires[fromPlug];
      }
  
      // Remove any existing connections for the target plug
      if (newWires[toPlug]) {
        delete newWires[newWires[toPlug]];
        delete newWires[toPlug];
      }
  
      // Create the new connection
      newWires[fromPlug] = toPlug;
      newWires[toPlug] = fromPlug;
      
      return newWires;
    });

  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const newLines = Object.entries(wires).filter(([from, to]) => from < to).map(([from, to]) => {
      const fromEl = document.getElementById(from);
      const toEl = document.getElementById(to);
      if (fromEl && toEl) {
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();
        return {
          key: `line-${from}-${to}`,
          x1: fromRect.left + fromRect.width / 2 + window.scrollX,
          y1: fromRect.top + fromRect.height / 2 + window.scrollY,
          x2: toRect.left + toRect.width / 2 + window.scrollX,
          y2: toRect.top + toRect.height / 2 + window.scrollY,
        };
      } else {
        return null;
      }
    }).filter(line => line !== null);
    setLines(newLines);
  }, [wires]); // Redraw lines when wires state changes

  const rows = [
    'QWERTZUIO',
    'ASDFGHJK',
    'PYXCVBNML'
  ];

  return (
    <div className="plugboard">
      {rows.map((row, rowIndex) => (
        <div className="row" key={`row-${rowIndex}`}>
          {row.split('').map((letter) => (
            <div
              key={`${rowIndex}-${letter}`} // Unique key for each plug
              id={letter}
              className="plug"
              draggable="true"
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
      <svg className="wires" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', pointerEvents: 'none' }}>
        {lines.map(({ key, x1, y1, x2, y2 }) => (
          <path key={key} d={`M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`} stroke="#d9d9d9" strokeWidth="2" fill="none" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
};

export default Plugboard;
