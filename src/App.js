import { useState, useEffect } from 'react';
import Header from './Components/Header';
import WordRow from './Components/WordRow';
import Keyboard from './Components/Keyboard';

function App() {
  const words = ['howdy', 'score'];
  const word = words[1];
  const [turn, setTurn] = useState(0);
  const [message, setMessage] = useState('');
  const [preciseLetters, setPreciseLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [answerKey, setAnswerKey] = useState([]);
  const [hasBeenChecked, setHasBeenChecked] = useState(true);
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
          // If this letter isn't already in the list of precise answers, add it
          if (!preciseLetters.includes(guess)) {
            const newPreciseLetters = preciseLetters.slice();
            newPreciseLetters.push(guess);
            setPreciseLetters(newPreciseLetters);
          }
        }
        // If the letter exists, but is in the wrong spot, gets yellow
        else if (word.includes(guess)) {
          answers[index] = 'yellow';
          if (!correctLetters.includes(guess)) {
            const newCorrectLetters = correctLetters.slice();
            newCorrectLetters.push(guess);
            setCorrectLetters(newCorrectLetters);
          }
        } else {
          answers[index] = 'gray';
          if (!wrongLetters.includes(guess)) {
            const newWrongLetters = wrongLetters.slice();
            newWrongLetters.push(guess);
            setWrongLetters(newWrongLetters);
          }
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

  const handleDelete = () => {
    const currentRow = determineRow();
    const currentRowIndex = determineRowIndex();
    if (currentRowIndex === 0) {
      setMessage("Sorry, you're at the beginning of the line.");
      return;
    }
    const newGameBoard = gameBoard.slice();
    // Restores the previous index to null
    newGameBoard[currentRow][currentRowIndex - 1] = null;
    // Doesn't count backspace as a turn
    const newTurn = turn - 1;
    setGameBoard(newGameBoard);
    setTurn(newTurn);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      // If it's not the first turn, but it's the end of a word AND it hasn't been submitted yet, tell user to submit
      if (turn !== 0 && turn % 5 === 0 && hasBeenChecked === false) {
        setMessage('Please press enter to submit.');
      } else {
        const letter = e.key;
        handleLetter(letter);
      }
    } else if (e.keyCode === 13) {
      setMessage('');
      handleSubmit();
    } else if (e.keyCode === 8 || e.keyCode === 46) {
      handleDelete();
    }
  };

  const handleKeyClick = (e) => {
    const letter = e.target.textContent.toLowerCase();
    if (letter === 'enter') {
      handleSubmit();
    } else if (letter === 'del') {
      handleDelete();
    } else {
      handleLetter(letter);
    }
  };

  const handleLetter = (letter) => {
    const row = determineRow();
    const rowIndex = determineRowIndex();
    if (!isGameOver) {
      setHasBeenChecked(false);
      const newGameBoard = gameBoard.slice();
      newGameBoard[row][rowIndex] = letter;
      setGameBoard(newGameBoard);
      const newTurn = turn + 1;
      setTurn(newTurn);
    }
  };

  const handleSubmit = () => {
    if (turn % 5 === 0 && turn !== 0 && !hasBeenChecked) {
      const currentRow = determineRow() - 1;
      checkGuess(gameBoard[currentRow]);
      setHasBeenChecked(true);
    } else {
      setMessage('Not enough letters.');
    }
  };

  const updateKeyboard = () => {
    // TODO: This whole thing needs some cleanup.
    // TODO: Accidentally directly updating state here by modifying the object
    const newKeys = keys.slice();
    preciseLetters.forEach((letter) => {
      newKeys.forEach((row) => {
        const targetKey = row.find((key) => key.name === letter);
        if (targetKey) {
          targetKey.value = 'green';
        }
      });
    });
    correctLetters.forEach((letter) => {
      newKeys.forEach((row, index) => {
        const targetKey = row.find((key) => key.name === letter);
        if (targetKey && preciseLetters.indexOf(letter) === -1) {
          targetKey.value = 'yellow';
        }
      });
    });
    wrongLetters.forEach((letter) => {
      newKeys.forEach((row) => {
        const targetKey = row.find((key) => key.name === letter);
        if (targetKey) {
          targetKey.value = 'gray';
        }
      });
    });
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  useEffect(updateKeyboard, [
    keys,
    preciseLetters,
    correctLetters,
    wrongLetters
  ]);

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
      <Keyboard
        handleKeyClick={handleKeyClick}
        keys={keys}
        preciseLetters={preciseLetters}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
      />
    </div>
  );
}

export default App;
