/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useEffect, useRef, useState } from "react";

import { Colors, Player } from "models";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState<number>(300);
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => startTimer(), [currentPlayer]);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.BLACK
        ? decrementBlackTimer
        : decrementWhiteTimer;
    timer.current = setInterval(callback, 1000);
  };

  const decrementBlackTimer = () => {
    setBlackTime((prev) => prev - 1);
  };

  const decrementWhiteTimer = () => {
    setWhiteTime((prev) => prev - 1);
  };

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={handleRestart}
          className="bg-slate-500 text-white px-2 py-1"
        >
          Restart game
        </button>
      </div>

      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
