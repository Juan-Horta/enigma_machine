import React from 'react';
import './InputDisplay.css'; // Ensure you have this CSS file in the same directory

const InputDisplay = ({ message, setMessage, cipher }) => {
  return (
    <div className="input-display">
      <div className="message-container">
        <input 
          type="text" 
          id="message-input" 
          className="message-input" 
          placeholder="Enter message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          autoFocus
          readOnly
        />
      </div>
      <div className="cipher-container">
        <input 
          type="text" 
          id="cipher-output" 
          className="cipher-input" 
          value={cipher} 
          readOnly 
        />
      </div>
    </div>
  );
};

export default InputDisplay;
