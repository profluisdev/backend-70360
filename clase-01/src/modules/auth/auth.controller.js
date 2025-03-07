import { request, response } from "express";
import { authService } from "./auth.service.js";

class AuthController {
  async registerUser(req = request, res = response) {
    try {
      const newUser = await authService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  async login(req = request, res = response) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);

      res.cookie("token", token, { maxAge: 3600000 });

      res.status(200).json({ message: "Logueado correcto", token });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}

export const authController = new AuthController();
