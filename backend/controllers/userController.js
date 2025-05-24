import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const getMentors = asyncHandler(async (req, res) => {
  const mentors = await User.find({ role: "mentor" }).select("-password");
  res.json(mentors);
});

export const getAspirants = asyncHandler(async (req, res) => {
  const aspirants = await User.find({ role: "aspirant" }).select("-password");
  res.json(aspirants);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.deleteOne();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
