/* eslint-disable react-hooks/exhaustive-deps */

import {
  Dispatch,
  DragEvent,
  FC,
  Fragment,
  MouseEvent,
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
    // select or deselect cell
    if (cell.id === selectedCell?.id) {
      setSelectedCell(null);
    } else if (cell.figure) {
      setSelectedCell(cell);
    }

    // move figure
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    }
  };

  const handleDragStart = (cell: Cell) => {
    console.log(cell);
    if (cell.figure) {
      setSelectedCell(cell);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (cell: Cell) => {
    console.log(cell);
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    }
  };

  const handleContextMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedCell(null);
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
              onContextMenu={handleContextMenu}
              onDragStart={() => handleDragStart(cell)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(cell)}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
