import mongoose from "mongoose";
import envsConfig from "./envs.config.js";

export const connectDB = () => {
  try {
    mongoose.connect(envsConfig.MONGO_URL);
    console.log("Mongo DB Conectado");
    
  } catch (error) {
    console.log("Error al conectar Mongo");
  }
}