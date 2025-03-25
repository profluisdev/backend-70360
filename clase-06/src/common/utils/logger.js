import pkg from 'winston';
const { createLogger, format, transports } = pkg;

const { combine, timestamp, printf, colorize } = format;

const customFormat = printf( ({level, message, timestamp}) => {
  return `${timestamp} [${level}]: ${message}`
})

export const logger = createLogger({
  level: "debug",
  format: combine(colorize(), timestamp({format: "YYYY-MM-DD HH:mm:ss"}), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/combine.log" }),
    new transports.File({filename: "logs/errors.log", level: "error"})
  ]
})