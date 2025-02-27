import { Router } from "express";
import userRouter from "../modules/users/user.router.js"
import authRouter from "../modules/auth/auth.router.js"


const router = Router();

router.use("/users", userRouter); // api/users
router.use("/auth", authRouter);

export default router;