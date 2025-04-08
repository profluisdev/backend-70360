import { request, response } from "express";
import { generateUsersMocks } from "../../mock/user.mock.js";
import { userService } from "./user.service.js";

class UserController {
  async getAll(req = request, res = response, next) {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async createUsersMocks(req = request, res = response) {
    try {
      const { amount } = req.params;
      const users = await userService.createUsersMocks(amount);

      res.status(201).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export const userController = new UserController();
