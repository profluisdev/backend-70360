import { Router } from "express";
import { petController } from "./pet.controller.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { petsMocksSchema } from "./pet.schemas.js";

const router = Router();

router.get("/mocks/:amount", validateSchema(petsMocksSchema), petController.createPetsMocks);
router.post("/", petController.create);
router.get("/:id", petController.getPetById);
router.put("/:id", petController.updatePet);
router.delete("/:id", petController.deletePet);
export default router;