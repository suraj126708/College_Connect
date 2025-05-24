import express from "express";
import {
  registerUser,
  loginUser,
  registerAdmin,
  loginAdmin,
} from "../controllers/authController.js";
import {
  validateRegister,
  validateLogin,
} from "../middleware/validationMiddleware.js";
import passport from "passport";
import userModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);
router.post("/Adminlogin", loginAdmin);
router.post("/AdminRegister", registerAdmin);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  async (req, res) => {
    try {
      console.log("Google OAuth Callback:", req.user);
      const { displayName, emails } = req.user;
      const email = emails[0].value;

      let user = await userModel.findOne({ email });

      if (!user) {
        const hashedPassword = await bcrypt.hash("defaultPassword123", 10);

        user = new userModel({
          name: displayName,
          email: email,
          password: hashedPassword,
        });

        await user.save();
        console.log("New user created:", user);
      } else {
        console.log("User already exists:", user);
      }
      res.redirect("http://localhost:5173/");
    } catch (error) {
      console.error("Google OAuth Error:", error);
      res.status(500).send("An error occurred during Google OAuth.");
    }
  }
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

export default router;
