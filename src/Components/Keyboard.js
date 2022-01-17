const Keyboard = ({
  handleKeyClick,
  keys,
  preciseLetters,
  correctLetters,
  wrongLetters
}) => {
  return (
    <>
      <div className="keyboard">
        {keys.map((keyRow) => (
          <div className="row">
            {keyRow.map((key) => (
              <div
                className={`${key.value} key ${
                  preciseLetters.includes(key.name) ? 'green' : 'yellow'
                }`}
                key={key.name}
                onClick={handleKeyClick}
              >
                <p>{key.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Keyboard;
