import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

export const logger = winston.createLogger({
    level: "http",
    format: winston.format.printf((info) => {
      return `${new Date()} ${info.level.toUpperCase()} ${info.message}`;
    }),
    transports: [
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        maxSize: "10m",
        zippedArchive: true,
        maxFiles: "14d",
      }),
    ],
  });
 for (let i = 0; i < 10000; i++) {
    logger.info(`hello world ${i}`)
    
 }

