const Keyboard = ({ handleKeyClick, keys }) => {
  // const keys = {
  //   q: null,
  //   w: null,
  //   e: null,
  //   r: null,
  //   t: null,
  //   y: null,
  //   u: null,
  //   i: null,
  //   o: null,
  //   p: null,
  //   a: null,
  //   s: null,
  //   d: null,
  //   f: null,
  //   g: null,
  //   h: null,
  //   j: null,
  //   k: null,
  //   l: null,
  //   Enter: null,
  //   z: null,
  //   x: null,
  //   c: null,
  //   v: null,
  //   b: null,
  //   n: null,
  //   m: null,
  //   del: null
  // };
  console.log(keys);
  keys.map((key) => key.forEach((n) => console.log(n)));
  return (
    <>
      <div className="keyboard">
        {keys.map((keyRow) => (
          <div className="row">
            {keyRow.map((key) => (
              <div
                className={`${key.value} key`}
                key={key.name}
                onClick={handleKeyClick}
              >
                <p>{key.name}</p>
              </div>
            ))}
          </div>
        ))}

        {/* <div className="top-keys">
          {Object.keys(keys[0]).map((key) => (
            <div
              className={`${keys[0][key]} key`}
              key={key}
              onClick={handleKeyClick}
            >
              <p>{key.toUpperCase()}</p>
            </div>
          ))}
        </div>
        <div className="middle-keys">
          {Object.keys(keys[1]).map((key) => (
            <div className={`${keys[1][key]} key`} key={key}>
              <p>{key.toUpperCase()}</p>
            </div>
          ))}
        </div>
        <div className="bottom-keys">
          {Object.keys(keys[2]).map((key) => (
            <div className={`${keys[2][key]} key`} key={key}>
              <p>{key.toUpperCase()}</p>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="keyboard">
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
        </div> */}
      {/* <div className="board">
        {Object.keys(keys).map((key) => (
          <div
            className="key"
            onClick={handleKeyClick}
            key={key}
            data-value={key}
          >
            {key}
          </div>
        ))}
      </div> */}
      {/* </div> */}
    </>
  );
};

export default Keyboard;
