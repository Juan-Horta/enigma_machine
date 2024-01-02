import logo from './logo.svg';
import React, { useState } from 'react';
import RotorDisplay from './components/RotorDisplay';
import InputDisplay from './components/InputDisplay';
import Lightboard from './components/Lightboard';
import Keyboard from './components/Keyboard';
import Plugboard from './components/Plugboard';
import './App.css';

function App() {
  const [litLetter, setLitLetter] = useState('');
  const [message, setMessage] = useState(''); // State for the message input
  const [cipher, setCipher] = useState('');

  // Add logic to handle encryption and update cipher state here

  const handleKeySelect = (key) => {
    // Update the message state with the selected key
    setMessage(prevMessage => prevMessage + key);
    // Update the cipher text
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    setLitLetter(randomLetter);
    setCipher((prevCipher) => prevCipher + randomLetter);
  };

  return (
    <div className="App">
      <RotorDisplay />
      <InputDisplay 
          message={message} 
          setMessage={setMessage} 
          cipher={cipher} 
        />
      <Lightboard litLetter={litLetter} />
      <Keyboard onKeySelect={handleKeySelect} />
      <Plugboard />
    </div>
  );
}

export default App;
