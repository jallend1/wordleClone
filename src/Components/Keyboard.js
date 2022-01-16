const Keyboard = ({ handleKeyClick }) => {
  return (
    <div className="keyboard">
      <div className="top-keys">
        <div className="key" onClick={handleKeyClick}>
          Q
        </div>
        <div className="key" onClick={handleKeyClick}>
          W
        </div>
        <div className="key" onClick={handleKeyClick}>
          E
        </div>
        <div className="key" onClick={handleKeyClick}>
          R
        </div>
        <div className="key" onClick={handleKeyClick}>
          T
        </div>
        <div className="key" onClick={handleKeyClick}>
          Y
        </div>
        <div className="key" onClick={handleKeyClick}>
          U
        </div>
        <div className="key" onClick={handleKeyClick}>
          I
        </div>
        <div className="key" onClick={handleKeyClick}>
          O
        </div>
        <div className="key" onClick={handleKeyClick}>
          P
        </div>
      </div>
      <div className="middle-keys">
        <div className="key" onClick={handleKeyClick}>
          A
        </div>
        <div className="key" onClick={handleKeyClick}>
          S
        </div>
        <div className="key" onClick={handleKeyClick}>
          D
        </div>
        <div className="key" onClick={handleKeyClick}>
          F
        </div>
        <div className="key" onClick={handleKeyClick}>
          G
        </div>
        <div className="key" onClick={handleKeyClick}>
          H
        </div>
        <div className="key" onClick={handleKeyClick}>
          J
        </div>
        <div className="key" onClick={handleKeyClick}>
          K
        </div>
        <div className="key" onClick={handleKeyClick}>
          L
        </div>
      </div>
      <div className="bottom-keys">
        <div className="key" onClick={handleKeyClick}>
          Enter
        </div>
        <div className="key" onClick={handleKeyClick}>
          Z
        </div>
        <div className="key" onClick={handleKeyClick}>
          X
        </div>
        <div className="key" onClick={handleKeyClick}>
          C
        </div>
        <div className="key" onClick={handleKeyClick}>
          V
        </div>
        <div className="key" onClick={handleKeyClick}>
          B
        </div>
        <div className="key" onClick={handleKeyClick}>
          N
        </div>
        <div className="key" onClick={handleKeyClick}>
          M
        </div>
        <div className="key" onClick={handleKeyClick}>
          Del
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
