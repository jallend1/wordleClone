import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Keyboard from './Components/Keyboard';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkGuess = (currentGuess) => {
    console.log(guess);
    console.log(currentGuess);
    console.log(currentGuess === word);
    if (currentGuess === word) {
      setMessage('WE HAVE A WINNER');
    }
    setGuess('');
  };

  const handleLetter = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const currentGuess = guess + e.key;
      setGuess(currentGuess);
      if (currentGuess.length === 5) {
        checkGuess(currentGuess);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleLetter);
    return () => window.removeEventListener('keydown', handleLetter);
  });

  return (
    <div className="App">
      <Header />
      <h2>{message}</h2>
      <p>{word}</p>
      <p>{guess}</p>
      <Keyboard />
    </div>
  );
}

export default App;
