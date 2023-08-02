import { FC } from "react";

import { Figure } from "models";

interface LostFiguresProps {
  lostBlackFigures: Figure[];
  lostWhiteFigures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({
  lostBlackFigures,
  lostWhiteFigures,
}) => {
  return (
    <div className="flex flex-1 border-[2px] border-solid border-slate-500 bg-slate-300">
      <div className="flex flex-col flex-1 border-r-[2px] border-solid border-slate-500">
        <div className="h-10 flex items-center justify-center border-b-[2px] border-solid border-slate-500">
          <h3 className="text-[16px] leading-[19px] font-[500] text-black">
            Черные фигуры
          </h3>
        </div>
        <ul className="flex justify-center items-start flex-wrap gap-x-1 gap-y-2 px-1 py-">
          {lostBlackFigures.map((figure) => (
            <li key={figure.id} className="flex gap-1 items-center">
              <h4>{figure.name}</h4>
              <img
                src={figure.logo}
                alt={figure.name}
                className="h-[16px] w-[16px]"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col flex-1">
        <div className="h-10 flex items-center justify-center border-b-[2px] border-solid border-slate-500">
          <h3 className="text-[16px] leading-[19px] font-[500] text-black">
            Белые фигуры
          </h3>
        </div>
        <ul className="flex justify-center items-start flex-wrap gap-x-1 gap-y-2 px-1 py-2">
          {lostWhiteFigures.map((figure) => (
            <li key={figure.id} className="flex gap-1 items-center">
              <h4>{figure.name}</h4>
              <img
                src={figure.logo}
                alt={figure.name}
                className="h-[16px] w-[16px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LostFigures;
