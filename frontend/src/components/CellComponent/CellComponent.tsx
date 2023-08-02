import { ButtonHTMLAttributes, FC } from "react";

import { Cell, Colors } from "models";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  cell: Cell;
  selected: boolean;
  onClick: () => void;
}

const CellComponent: FC<Props> = ({ cell, selected, onClick, ...rest }) => {
  return (
    <button
      type="button"
      className={
        "w-[64px] h-[64px] flex justify-center items-center select-none " +
        "rounded-none border-none outline-none " +
        `${cell.color === Colors.WHITE ? "bg-slate-400" : "bg-slate-500"} ` +
        `${cell.available && cell.figure ? "!bg-yellow-400" : ""} ` +
        `${selected ? "!bg-blue-500" : ""}`
      }
      onClick={onClick}
      {...rest}
    >
      {cell.available && !cell.figure && (
        <div className="h-[8px] w-[8px] bg-green-400 rounded-[50%]" />
      )}
      {cell.figure?.logo && (
        <img
          src={cell.figure.logo}
          alt={cell.figure.name}
          className="h-[48px] w-[48px] relative"
        />
      )}
    </button>
  );
};

export default CellComponent;
