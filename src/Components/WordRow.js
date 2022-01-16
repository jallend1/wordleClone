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
            {letter ? letter.toUpperCase() : null}
          </div>
        ))}
    </div>
  );
};

export default WordRow;
