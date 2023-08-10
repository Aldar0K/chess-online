import { Router } from "express";

import games from "./games.route.js";
import users from "./users.route.js";

const router = Router();

router.use("/users", users);
router.use("/games", games);

export default router;
