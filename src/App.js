import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Keyboard from './Components/Keyboard';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [guess, setGuess] = useState('');

  const handleLetter = ({ key }) => {
    const currentGuess = guess + key;

    setGuess(currentGuess);
  };

  window.addEventListener('keydown', handleLetter);

  // useEffect(() => {
  //   window.addEventListener('keydown', handleLetter);
  //   return () => window.removeEventListener('keydown', handleLetter);
  // }, []);

  return (
    <div className="App">
      <Header />
      <p>{word}</p>
      <p>{guess}</p>
      <Keyboard />
    </div>
  );
}

export default App;
