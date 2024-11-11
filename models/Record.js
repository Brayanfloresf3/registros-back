import { Schema, model } from "mongoose";

let collection = "Records";

let recordSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  },
  {
    timestamps: true,
  }
);

let Record = model(collection, recordSchema);
export default Record;
