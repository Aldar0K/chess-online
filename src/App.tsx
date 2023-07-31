/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { Board, Colors, Player } from "models";
import "styles/main.css";

import { BoardComponent, LostFigures, Timer } from "components";

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
    <div className="flex gap-[8px] h-full w-full">
      <main className="flex-1 w-[70%] flex justify-center items-center">
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
      </main>

      <aside className="w-[30%] flex flex-col gap-2">
        <h2 className="text-[16px] leading-[19px] font-[500] text-black">
          Текущий игрок:{" "}
          {currentPlayer?.color === Colors.WHITE ? "Белый" : "Черный"}
        </h2>

        <Timer currentPlayer={currentPlayer} restart={restart} />
        <LostFigures
          lostBlackFigures={board.lostBlackFigures}
          lostWhiteFigures={board.lostWhiteFigures}
        />
      </aside>
    </div>
  );
}

export default App;
