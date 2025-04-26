import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define user schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    leetcodeProfile: {
      type: String,
      default: "",
      trim: true,
    },
    gfgProfile: {
      type: String,
      default: "",
      trim: true,
    },
    leetcodeSolved: { type: Number, default: 0 },
    gfgSolved: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Hash password before saving user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model("User", UserSchema);
