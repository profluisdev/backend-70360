import { request, response } from "express";
import { authService } from "./auth.service.js";

class AuthController {
  async registerUser(req = request, res = response, next) {
    try {
      const newUser = await authService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
  async login(req = request, res = response, next) {
    try {
      const { email, password } = req.body;
      const response = await authService.login(email, password);

      res.cookie("token", response.token, { maxAge: 3600000 });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
