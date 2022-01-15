const WordRow = ({ letters, answers }) => {
  return (
    <div className="row">
      {letters &&
        letters.map((letter, index) => (
          <div
            className="letter"
            key={Math.random()}
            style={{
              backgroundColor: answers ? answers[index] : 'purple'
            }}
          >
            {letter}
          </div>
        ))}
    </div>
  );
};

export default WordRow;
