import { FC } from "react";

import { Cell, Colors } from "models";

interface Props {
  cell: Cell;
}

const CellComponent: FC<Props> = ({ cell }) => {
  return (
    <div
      className={`w-[64px] h-[64px] flex justify-center items-center ${
        cell.color === Colors.WHITE ? "bg-slate-400" : "bg-slate-500"
      }`}
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
