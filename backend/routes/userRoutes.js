// File: routes/userRoutes.js
import express from "express";
import {
  getUserById,
  getMentors,
  getAspirants,
  deleteUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", protect, getUserById);
router.get("/role/mentors", protect, getMentors);
router.get("/role/aspirants", protect, getAspirants);
router.delete("/:id", protect, deleteUser);

export default router;
