
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

  console.log(error);
 
  res.status(statusCode).json({ statusCode, message });
}