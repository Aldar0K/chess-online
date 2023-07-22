import { FC } from "react";

import { Cell } from "models";

interface Props {
  cell: Cell;
}

const CellComponent: FC<Props> = ({ cell }) => {
  return (
    <div
      className={`w-[64px] h-[64px] flex justify-center items-center bg-[${cell.color}]`}
    >
      {/* {cell.figure} */}
    </div>
  );
};

export default CellComponent;
