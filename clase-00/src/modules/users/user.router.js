import { Router } from "express";
import { userController } from "./user.controller.js";


const router = Router();

router.get("/", userController.getAll);

export default router;