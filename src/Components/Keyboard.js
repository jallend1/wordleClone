const Keyboard = ({ handleKeyClick, keys }) => {
  return (
    <>
      <div className="keyboard">
        {keys.map((keyRow) => (
          <div className="row keyboard-row">
            {keyRow.map((key) => (
              <div
                className={`${key.value} key`}
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
