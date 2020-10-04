import mongoose, { Schema } from "mongoose";
import { TBelonging } from "../types/belonging";

const BelongingSchema = new Schema(
  {
    name: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { collection: "Belongings", timestamps: true }
);

export default mongoose.model<TBelonging>("Belongings", BelongingSchema);
