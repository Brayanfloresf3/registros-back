import { Schema, model } from "mongoose";

let collection = "Properties";

let propertySchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  },
  {
    timestamps: true,
  }
);

let Property = model(collection, propertySchema);
export default Property;
