import { Document } from "mongoose";

export type TUser = Document & {
  name: string;
};
