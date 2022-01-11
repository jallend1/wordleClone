import { useState, useEffect } from 'react';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [guess, setGuess] = useState('');

  const handleGuess = (e) => console.log(e);

  return (
    <div className="App">
      <p>{word}</p>
    </div>
  );
}

export default App;
