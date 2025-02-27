import { request, response } from "express";

class UserController{
  async getAll(req = request, res = response){
    try {

      res.send("Hola")
      
    } catch (error) {
      console.log(error);
    }
  }
}


export const userController = new UserController();