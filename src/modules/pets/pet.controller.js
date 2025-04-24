import { request, response } from "express";
import { petService } from "./pet.service.js";

class PetController {
  async create(req = request, res = response, next) {
    try {
      const body = req.body;
      const pet = await petService.create(body);
      res.status(201).json(pet);
    } catch (error) {
      next(error);
    }
  }

  async getPetById(req = request, res = response, next) {
    try {
      const { id } = req.params;
      const pet = await petService.getOne({ _id: id });

      res.status(200).json(pet);
    } catch (error) {
      next(error);
    }
  }

  async createPetsMocks(req = request, res = response) {
    try {
      const { amount } = req.params;
      const pets = await petService.createPetsMocks(amount);

      res.status(201).json(pets);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updatePet(req = request, res = response, next){
    try {
      const { id } = req.params;
      const body = req.body;
      
      const updatePet = await petService.updatePet(id, body);
      res.status(200).json(updatePet);

    } catch (error) {
      next(error)
    }
  }

  async deletePet(req = request, res = response, next){
    try {
      const { id } = req.params;
      
      const deletePet = await petService.deletePet(id);
      res.status(200).json({message: `Mascota con el id ${id} eliminada`});

    } catch (error) {
      next(error)
    }
  }
}

export const petController = new PetController();
