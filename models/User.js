import { Schema, model } from "mongoose";

let collection = "Users";

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    isOnline: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

let User = model(collection, userSchema);
export default User;
