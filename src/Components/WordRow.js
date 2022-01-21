const WordRow = ({ letters, answers }) => {
  return (
    <div className="row">
      {letters &&
        letters.map((letter, index) => (
          <div
            className={`letter ${answers ? answers[index] : null}`}
            key={Math.random()}
          >
            <p>{letter ? letter.toUpperCase() : null}</p>
          </div>
        ))}
    </div>
  );
};

export default WordRow;
