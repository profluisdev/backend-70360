import { Router } from "express";
import { adoptionController } from "./adoption.controller.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import {  createAdoptionSchema, getAdoptionSchema } from "./adoption.schma.js";

const router = Router();

router.get("/", adoptionController.getAllAdoptions);
router.get("/:id", validateSchema(getAdoptionSchema), adoptionController.getAdoption);
router.post("/",validateSchema(createAdoptionSchema), adoptionController.createAdoption);

export default router;