import { request, response } from "express";
import { petService } from "./pet.service.js";

class PetController{
  async create(req = request, res = response){
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error"});
    }
  }

  async createPetsMocks(req = request, res = response){
    try {
      const { amount } = req.params;
      const pets = await petService.createPetsMocks(amount);

      res.status(201).json(pets);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error"});
    }
  }
}

export const petController = new PetController();