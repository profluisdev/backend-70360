import jwt from "jsonwebtoken"
import envsConfig from "../../config/envs.config.js";

export const createToken = (user) => {
  const { id, email } = user;
  const token = jwt.sign({id, email}, envsConfig.JWT_SECRET, {expiresIn: "30m"});
  return token;
}

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, envsConfig.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}