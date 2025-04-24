import { Router } from "express";
import { petController } from "./pet.controller.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { createPetSchema, petsMocksSchema, updatePetSchema } from "./pet.schemas.js";
import { objectIdSchema } from "../../common/schemas/objectId.schema.js";

const router = Router();

router.get("/mocks/:amount", validateSchema(petsMocksSchema), petController.createPetsMocks);
router.post("/", validateSchema(createPetSchema), petController.create);
router.get("/:id", validateSchema(objectIdSchema), petController.getPetById);
router.put("/:id", validateSchema(updatePetSchema), petController.updatePet);
router.delete("/:id",validateSchema(objectIdSchema), petController.deletePet);
export default router;