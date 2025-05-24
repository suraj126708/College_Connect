import asyncHandler from "express-async-handler";
import User from "../models/MentorModel.js";
import bcrypt from "bcryptjs";

export const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    mobileNo,
    role,
    yearOfStudy,
    availableSlots,
    linkedIn,
    college,
  } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const image = req.file ? req.file.path : null;

  const password =
    name + "@" + mobileNo.substring(mobileNo.length - 4, mobileNo.length);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    mobileNo,
    role,
    yearOfStudy,
    availableSlots,
    linkedIn,
    college,
    profilePicture: image,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profilePicture: user.profilePicture,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    // Update user fields
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;
    user.yearOfStudy = req.body.yearOfStudy || user.yearOfStudy;
    user.availableSlots = req.body.availableSlots || user.availableSlots;
    user.linkedIn = req.body.linkedIn || user.linkedIn;
    user.college = req.body.college || user.college;

    // Handle image upload via Cloudinary
    user.image = req.file ? req.file.path : user.image;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      image: updatedUser.image, // Include updated image URL in response
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

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
  console.log("Deleting user  :", user);

  if (user) {
    await User.deleteOne({ _id: user._id });
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
