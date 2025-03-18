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
      const token = await authService.login(email, password);

      res.cookie("token", token, { maxAge: 3600000 });

      res.status(200).json({ message: "Logueado correcto", token });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
