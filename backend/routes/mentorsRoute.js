import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  registerUser,
  getMentors,
  deleteUser,
} from "../controllers/mentorController.js";

const router = express.Router();

router.post("/register", upload.single("profilePic"), registerUser);
router.get("/getMentors", getMentors);
router.delete("/deleteMentor/:id", deleteUser);

export default router;
