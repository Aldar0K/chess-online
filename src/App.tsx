import { useEffect, useState } from "react";

import { Board, Colors, Player } from "models";
import "styles/main.css";

import { BoardComponent } from "components";

function App() {
  const [board, setBoard] = useState<Board>(new Board());
  const [whitePlayer] = useState<Player>(new Player(Colors.WHITE));
  const [blackPlayer] = useState<Player>(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  };

  const swapPlayer = () => {
    setCurrentPlayer((player) =>
      player?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  };

  return (
    <div className="h-full w-full flex justify-center items-center border-[2px] border-solid border-slate-700">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  );
}

export default App;
