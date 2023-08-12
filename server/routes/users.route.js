import { Router } from "express";

import {
  getUsers,
  authUser,
  registerUser,
} from "../controllers/users.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, getUsers);
router.route("/").post(registerUser);
router.route("/login").post(authUser);

export default router;
