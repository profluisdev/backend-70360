import { request, response } from "express";

class PetController{
  async create(req = request, res = response){
    try {
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error"});
    }
  }
}

export const petController = new PetController();