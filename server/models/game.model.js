import { Schema, model } from "mongoose";

const gameSchema = Schema(
  {
    pgn: { type: "String", required: false },
    white: { type: Schema.Types.ObjectId, ref: "User" },
    black: { type: Schema.Types.ObjectId, ref: "User" },
    winner,
    endReason,
    host: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestaps: true }
);

const Game = model("Game", gameSchema);

export default Game;
