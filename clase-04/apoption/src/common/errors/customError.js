import { logger } from "../utils/logger.js";

export const customError = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? "Internal Server Error" : err.message;
  const stack = err.stack.split("\n")
  const error = {
    statusCode,
    files: stack,
    message: err.message,
    path: req.originalUrl,
    method: req.method
  };
  logger.log("error", `Status: ${statusCode} [${req.method}] ${req.originalUrl} - msg: ${err.message}`)
  console.log(error);
 
  res.status(statusCode).json({ statusCode, message });
}