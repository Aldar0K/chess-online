import { Router } from "express";

import {
  createGame,
  getGame,
  getGames,
} from "../controllers/games.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, getGames);
router.route("/:code").get(protect, getGame);
router.route("/").post(protect, createGame);

export default router;
