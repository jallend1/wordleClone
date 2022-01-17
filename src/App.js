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
  const [keys, setKeys] = useState([
    [
      { name: 'q', value: null },
      { name: 'w', value: null },
      { name: 'e', value: null },
      { name: 'r', value: null },
      { name: 't', value: null },
      { name: 'y', value: null },
      { name: 'u', value: null },
      { name: 'i', value: null },
      { name: 'o', value: null },
      { name: 'p', value: null }
    ],
    [
      { name: 'a', value: null },
      { name: 's', value: null },
      { name: 'd', value: null },
      { name: 'f', value: null },
      { name: 'g', value: null },
      { name: 'h', value: null },
      { name: 'j', value: null },
      { name: 'k', value: null },
      { name: 'l', value: null }
    ],
    [
      { name: 'Enter', value: null },
      { name: 'z', value: null },
      { name: 'x', value: null },
      { name: 'c', value: null },
      { name: 'v', value: null },
      { name: 'b', value: null },
      { name: 'n', value: null },
      { name: 'm', value: null },
      { name: 'del', value: null }
    ]
  ]);

  const checkGuess = (currentGuess) => {
    console.log(keys.find((key) => key === currentGuess[0]));
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

  const handleKeyPress = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key;
      handleLetter(letter);
    }
  };

  const handleKeyClick = (e) => {
    const letter = e.target.textContent.toLowerCase();
    handleLetter(letter);
  };

  const handleLetter = (letter) => {
    if (!isGameOver) {
      const row = determineRow();
      const rowIndex = determineRowIndex();
      const newGameBoard = gameBoard.slice();
      newGameBoard[row][rowIndex] = letter;
      setGameBoard(newGameBoard);
      if (rowIndex === 4) {
        checkGuess(newGameBoard[row]);
      }
      const newTurn = turn + 1;
      setTurn(newTurn);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
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
      <Keyboard handleKeyClick={handleKeyClick} keys={keys} />
    </div>
  );
}

export default App;
