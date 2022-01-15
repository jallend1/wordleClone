import { useState, useEffect } from 'react';
import Header from './Components/Header';
import WordRow from './Components/WordRow';
import Keyboard from './Components/Keyboard';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  // const gameBoardLayout = new Array(6).fill(new Array(5).fill(null));
  // console.log(gameBoardLayout);
  const [guess, setGuess] = useState([]);
  const [guessHistory, setGuessHistory] = useState([]);
  const [turn, setTurn] = useState([0, 0]);
  // Creates array of 6 rows and 5 columns
  const [gameBoard, setGameBoard] = useState(
    new Array(6).fill(new Array(5).fill(null))
  );
  console.log(gameBoard);
  const [message, setMessage] = useState('');

  const checkGuess = (currentGuess) => {
    if (currentGuess.join('') === word) {
      setMessage('WE HAVE A WINNER');
    } else {
      // Array for tracking which letters are accurate
      const answers = [];
      currentGuess.forEach((guess, index) => {
        // If the letter is in the right spot, gets green
        if (word[index] === guess) {
          answers[index] = 'green';
        }
        // If the letter exists, but is in the wrong spot, gets yellow
        else if (word.includes(guess)) {
          answers[index] = 'yellow';
        } else {
          answers[index] = 'neutral';
        }
      });
      const newGuessHistory = guessHistory.slice();
      newGuessHistory.push(answers);
      // You get six guesses, my dude
      if (newGuessHistory.length === 6) {
        setMessage('Game over :(');
      }
      setGuessHistory(newGuessHistory);
      setGuess('');
    }
  };

  const handleLetter = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const currentGuess = guess.slice();
      currentGuess.push(e.key);
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
      <WordRow letters={guess} />
      <p>{word}</p>
      <p>{guess}</p>
      <Keyboard />
    </div>
  );
}

export default App;
