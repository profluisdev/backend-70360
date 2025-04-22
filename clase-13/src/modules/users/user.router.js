import { Router } from "express";
import { userController } from "./user.controller.js";
import { userDao } from "./user.dao.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { objectIdSchema } from "../../common/schemas/objectId.schema.js";


const router = Router();

router.get("/", userController.getAll);
router.get("/mocks/:amount", userController.createUsersMocks);
router.delete("/:id", validateSchema(objectIdSchema), async (req, res) => {
  const { id } = req.params;
  await userDao.remove(id);
  res.status(200).json("Usuario eliminado");
})

export default router;