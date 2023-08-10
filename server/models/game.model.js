import { Schema, model } from "mongoose";

const gameSchema = Schema(
  {
    pgn: { type: String, required: false },
    white: { type: Schema.Types.ObjectId, ref: "User", required: false },
    black: { type: Schema.Types.ObjectId, ref: "User", required: false },
    winner: { type: String, enum: ["white", "black", "draw"] },
    endReason: {
      type: String,
      enum: [
        "draw",
        "checkmate",
        "stalemate",
        "repetition",
        "insufficient",
        "abandoned",
      ],
    },
    host: { type: Schema.Types.ObjectId, ref: "User", required: false },
    code: { type: String, required: false },
    unlisted: { type: Boolean, required: false },
    timeout: { type: Number, required: false },
    observers: [{ type: Schema.Types.ObjectId, ref: "User", required: false }],
    startedAt: { type: Number, required: false },
    endedAt: { type: Number, required: false },
  },
  { timestaps: true }
);

const Game = model("Game", gameSchema);

export default Game;
