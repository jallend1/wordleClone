import { useState, useEffect } from 'react';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [guess, setGuess] = useState('');

  const handleLetter = ({ key }) => {
    console.log(guess);
    const currentGuess = guess + key;
    console.log(currentGuess);
    setGuess(currentGuess);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleLetter);
    return () => window.removeEventListener('keydown', handleLetter);
  }, []);

  return (
    <div className="App">
      <p>{word}</p>
      <p>{guess}</p>
    </div>
  );
}

export default App;
