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

import { Board, Cell, Player } from "models";

import { CellComponent } from "components";

interface SelectOptions {
  deselect?: boolean;
}

interface BoardComponentProps {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const selectCell = (
    cell: Cell,
    { deselect }: SelectOptions = { deselect: true }
  ) => {
    if (deselect && cell.id === selectedCell?.id) {
      setSelectedCell(null);
    } else if (cell.figure && cell.figure.color === currentPlayer?.color) {
      setSelectedCell(cell);
    }
  };

  const moveCell = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayer();
      updateBoard();
    }
  };

  const handleClick = (cell: Cell) => {
    selectCell(cell);
    moveCell(cell);
  };

  const handleDragStart = (cell: Cell) => {
    selectCell(cell, { deselect: false });
  };

  const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (cell: Cell) => {
    moveCell(cell);
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
