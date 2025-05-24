import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    role: {
      type: String,
    },
    yearOfStudy: {
      type: String,
      enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    },
    availableSlots: {
      type: [String],
    },
    linkedIn: {
      type: String,
    },
    college: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    totalSessions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Mentor", userSchema);
export default User;
