import { Dispatch, FC, Fragment, SetStateAction } from "react";

import { CellComponent } from "components";
import { Board } from "models";

interface Props {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
}

const BoardComponent: FC<Props> = ({ board }) => {
  return (
    <div className="w-[calc(64px*8)] h-[calc(64px*8)] flex flex-wrap">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
