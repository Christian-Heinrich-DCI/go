import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // usual game sizes: 9, 13, 19
  const [gameSize, setGameSize] = useState(9);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const gameBoard = [];
    for (let y = 0; y < gameSize; y++) {
      const gameRow = [];
      for (let x = 0; x < gameSize; x++) {
        gameRow.push([]);
      }
      gameBoard.push(gameRow);
    }
    setGameData([...gameBoard]);
  }, [gameSize]);

  const handleClick = (x, y) => {
    const newGameData = [...gameData];
    newGameData[y][x] = true;
    setGameData(newGameData);
  };

  return (
    <>
      <header>
        <h2>Board Sizes</h2>
        <button onClick={() => setGameSize(10)}>9</button>
        <button onClick={() => setGameSize(14)}>13</button>
        <button onClick={() => setGameSize(20)}>19</button>
      </header>
      <main
        id="game"
        style={{
          gridTemplateColumns: `repeat(${gameSize}, 2.5rem)`,
          gridTemplateRows: `repeat(${gameSize}, 2.5rem)`,
        }}
      >
        {gameData.map((row, y) => (
          <div className="row" key={"row-" + y + 1}>
            {row.map((cell, x) => (
              <div
                className="cell"
                key={"cell-" + x}
                onClick={() => handleClick(x, y)}
              >
                {cell === true ? "X" : ""}
              </div>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
