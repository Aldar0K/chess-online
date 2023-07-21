import { FC } from "react";

const Board: FC = () => {
  return (
    <div className="w-[calc(64px*8)] h-[calc(64px*8)] flex flex-wrap">
      <div className="w-[64px] h-[64px] flex justify-center items-center bg-[white]"></div>
      <div className="w-[64px] h-[64px] flex justify-center items-center bg-[black]"></div>
      <div className="w-[64px] h-[64px] flex justify-center items-center bg-[white]"></div>
      <div className="w-[64px] h-[64px] flex justify-center items-center bg-[black]"></div>
    </div>
  );
};

export default Board;
