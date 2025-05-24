import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  Timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
export default User;
