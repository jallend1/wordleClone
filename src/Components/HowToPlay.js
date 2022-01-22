const HowToPlay = () => {
  return (
    <div>
      <header>
        <h2>HOW TO PLAY</h2>
      </header>
      <p>Guess the WORDLE in 6 tries.</p>
      <p>
        Each guess must be a valid 5 letter word. Hit the enter button to
        submit.
      </p>
      <p>
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </p>
      <h3>Examples</h3>
      <div>
        <p>WEARY</p>
        <p>The letter W is in the word and in the correct spot.</p>
      </div>
      <div>
        <p>PILLS</p>
        <p>The letter I is in the word but in the wrong spot.</p>
      </div>
      <div>
        <p>VAGUE</p>
        The letter U is not in the word in any spot.
      </div>
      <footer>A new WORDLE will be available each day!</footer>
    </div>
  );
};

export default HowToPlay;
