import { Router } from "express";

import { createGame, getGames } from "../controllers/games.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, getGames);
router.route("/").post(protect, createGame);

export default router;
