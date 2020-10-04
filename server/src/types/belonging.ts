import { Document } from "mongoose";

export type TBelonging = Document & {
  name: string;
  userId: String;
};
