/* eslint-disable react-hooks/exhaustive-deps */

import {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { Board, Cell } from "models";

import { CellComponent } from "components";

interface Props {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
}

const BoardComponent: FC<Props> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleClick = (cell: Cell) => {
    if (!cell.figure) return;

    if (cell.id === selectedCell?.id) {
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  return (
    <div className="w-[calc(64px*8)] h-[calc(64px*8)] flex flex-wrap">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              selected={cell.id === selectedCell?.id}
              onClick={() => handleClick(cell)}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
