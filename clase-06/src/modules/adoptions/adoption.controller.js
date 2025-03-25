import { request, response } from "express";
import { adoptionService } from "./adoption.service.js";

class AdoptionController {
  async getAllAdoptions(req = request, res = response, next) {
    try {
      const adoptions = await adoptionService.getAllAdoptions();

      res.status(200).json(adoptions);
    } catch (error) {
      next(error);
    }
  }
  async getAdoption(req = request, res = response, next) {
    try {
      const { id } = req.params;
      const adoption = await adoptionService.getAdoption({ _id: id });
      res.status(200).json(adoption);
    } catch (error) {
      next(error);
    }
  }
  async createAdoption(req = request, res = response, next) {
    try {
      const { owner, pet } = req.body;
      const adoption = await adoptionService.createAdoption(owner, pet);

      res.status(201).json(adoption);
    } catch (error) {
      next(error);
    }
  }
}

export const adoptionController = new AdoptionController();
