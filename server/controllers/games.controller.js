import asyncHandler from "express-async-handler";

import Game from "../models/game.model.js";

const allGames = asyncHandler(async (req, res) => {
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

export { allGames };
