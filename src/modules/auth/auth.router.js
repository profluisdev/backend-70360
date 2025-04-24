import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "./auth.schemas.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), authController.registerUser);
router.post("/login",validateSchema(loginSchema), authController.login);

export default router;
