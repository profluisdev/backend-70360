import { Router } from "express";
import userRouter from "../modules/users/user.router.js"
import authRouter from "../modules/auth/auth.router.js"
import petRouter from "../modules/pets/pet.router.js"


const router = Router();

router.use("/users", userRouter); // api/users
router.use("/auth", authRouter);
router.use("/pets", petRouter);

export default router;