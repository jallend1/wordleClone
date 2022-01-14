const WordRow = ({ letters }) => {
  return (
    <div className="row">
      {letters &&
        letters.map((letter) => (
          <div className="letter" key={Math.random()}>
            {letter}
          </div>
        ))}
    </div>
  );
};

export default WordRow;
