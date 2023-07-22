import { useEffect, useState } from "react";

import { Board } from "models";
import "styles/main.css";

import { BoardComponent } from "components";

function App() {
  const [board, setBoard] = useState<Board>(new Board());

  useEffect(() => restart(), []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  };

  return (
    <div className="h-full w-full flex justify-center items-center border-[2px] border-solid border-[green]">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
