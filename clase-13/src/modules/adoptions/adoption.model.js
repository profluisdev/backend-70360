import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  pet: { type: mongoose.SchemaTypes.ObjectId, ref: "pets" },
});

export const adoptionModel = mongoose.model("adoptions", adoptionSchema);
