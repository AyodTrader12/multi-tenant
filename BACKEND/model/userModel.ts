import { model, Schema, Document } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  avatarID: string;
  friends: [];
  posts: [];
}

interface iUSerData extends iUser, Document {}

const userModel = new Schema<iUSerData>(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    friends: {
      type: [],
    },
    posts: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iUSerData>("users", userModel);
