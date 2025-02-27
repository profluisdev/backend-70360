import express from "express";
import envsConfig from "./config/envs.config.js";
import { connectDB } from "./config/mongoDb.config.js";
import router from "./common/router.js"
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", router);

app.listen(envsConfig.PORT, () => {
  console.log(`Servidor en el puerto ${envsConfig.PORT}`);
})