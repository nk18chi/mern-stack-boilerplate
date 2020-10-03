import mongoose, { Schema } from "mongoose";
import { TUser } from "../types/user";

const UserSchema = new Schema(
  {
    name: String,
  },
  { collection: "Users", timestamps: true }
);

export default mongoose.model<TUser>("Users", UserSchema);
