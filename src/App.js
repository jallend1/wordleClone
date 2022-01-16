import { useState, useEffect } from 'react';
import Header from './Components/Header';
import WordRow from './Components/WordRow';
import Keyboard from './Components/Keyboard';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [turn, setTurn] = useState(0);
  const [message, setMessage] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [answerKey, setAnswerKey] = useState([]);
  const [gameBoard, setGameBoard] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);

  const checkGuess = (currentGuess) => {
    const answers = new Array(5);
    if (currentGuess.join('') === word) {
      answers.fill('green');
      setMessage('WE HAVE A WINNER');
      setIsGameOver(true);
    } else {
      // Array for tracking which letters are accurate
      currentGuess.forEach((guess, index) => {
        // If the letter is in the right spot, gets green
        if (word[index] === guess) {
          answers[index] = 'green';
        }
        // If the letter exists, but is in the wrong spot, gets yellow
        else if (word.includes(guess)) {
          answers[index] = 'yellow';
        } else {
          answers[index] = 'gray';
        }
      });
    }
    // Reaching the end of the game and no victory message, display losing message
    if (turn >= 29 && message === '') {
      setIsGameOver(true);
      setMessage('So sorry :(');
    }
    const newAnswerKey = answerKey.slice();
    newAnswerKey.push(answers);
    setAnswerKey(newAnswerKey);
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
    if (!isGameOver) {
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
      <div className="gameboard">
        {gameBoard.map((letters, index) => (
          <WordRow letters={letters} answers={answerKey[index]} key={index} />
        ))}
      </div>
      <p>{word}</p>
      <Keyboard />
    </div>
  );
}

export default App;
