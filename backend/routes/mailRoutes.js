import express from "express";
import { sendMail } from "../controllers/mailController.js";

const router = express.Router();

// POST /api/mail
router.post("/", sendMail);

export default router;
