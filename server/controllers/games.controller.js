import asyncHandler from "express-async-handler";
import { v4 as uuid } from "uuid";

import Game from "../models/game.model.js";

export const getGames = asyncHandler(async (req, res) => {
  const searchValue = req.query.search
    ? {
        $or: [{ pgn: { $regex: req.query.search, $options: "i" } }],
        $or: [{ code: { $regex: req.query.search, $options: "i" } }],
      }
    : {};

  const games = await Game.find(searchValue).find({
    _id: { $ne: req.user._id },
  });
  res.send(games);
});

export const createGame = asyncHandler(async (req, res) => {
  const { side, unlisted } = req.body;

  if (!side) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  try {
    const game = await Game.create({
      code: uuid(),
      pgn: "",
      unlisted,
      host: req.user,
      white: side === "white" && req.user,
      black: side === "black" && req.user,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
