import express from "express";
import envsConfig from "./config/envs.config.js";
import { connectDB } from "./config/mongoDb.config.js";
import router from "./common/router.js";
import { customError } from "./common/errors/customError.js";
import { logger } from "./common/utils/logger.js";
import swaggerUiExpress from "swagger-ui-express";
import { specs } from "./config/swagger.config.js";

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// Documentación
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(customError);

app.listen(envsConfig.PORT, () => {
  logger.info(`Servidor en el puerto ${envsConfig.PORT}`);
});
