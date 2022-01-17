const WordRow = ({ letters, answers }) => {
  return (
    <div className="row">
      {letters &&
        letters.map((letter, index) => (
          <div
            className="letter"
            key={Math.random()}
            style={{
              backgroundColor: answers ? answers[index] : null
            }}
          >
            <p>{letter ? letter.toUpperCase() : null}</p>
          </div>
        ))}
    </div>
  );
};

export default WordRow;
