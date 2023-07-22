import { FC } from "react";

import { Cell, Colors } from "models";

interface Props {
  cell: Cell;
  selected: boolean;
  onClick: () => void;
}

const CellComponent: FC<Props> = ({ cell, selected, onClick }) => {
  return (
    <div
      className={
        "w-[64px] h-[64px] flex justify-center items-center select-none " +
        `${cell.color === Colors.WHITE ? "bg-slate-400" : "bg-slate-500"} ` +
        `${selected ? "!bg-blue-500" : ""}`
      }
      onClick={onClick}
    >
      {cell.figure?.logo && (
        <img
          src={cell.figure.logo}
          alt={cell.figure.name}
          className="h-[48px] w-[48px] relative"
        />
      )}
    </div>
  );
};

export default CellComponent;
