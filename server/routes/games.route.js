import { Router } from "express";

import { allGames } from "../controllers/games.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, allGames);

export default router;
