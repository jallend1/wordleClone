import { useState, useEffect } from 'react';
import Header from './Components/Header';
import WordRow from './Components/WordRow';
import Keyboard from './Components/Keyboard';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [turn, setTurn] = useState(0);

  const [gameBoard, setGameBoard] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);
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
    }
  };

  const determineRow = () => {
    if (turn > 4) {
      return Math.floor(turn / 5);
    } else {
      return 0;
    }
  };

  const determineRowIndex = () => {
    return turn % 5;
  };

  const handleLetter = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const row = determineRow();
      const rowIndex = determineRowIndex();
      const newGameBoard = gameBoard.slice();
      newGameBoard[row][rowIndex] = e.key;
      setGameBoard(newGameBoard);
      if (rowIndex === 4) {
        checkGuess(newGameBoard[row]);
      }
      const newTurn = turn + 1;
      setTurn(newTurn);
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
      {gameBoard.map((row) => (
        <WordRow letters={row} key={Math.random()} />
      ))}
      <p>{word}</p>
      <Keyboard />
    </div>
  );
}

export default App;
