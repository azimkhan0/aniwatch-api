import { env } from "./env.js";
import pino, { type LoggerOptions } from "pino";

const loggerOptions: LoggerOptions = {
    redact: env.isProduction ? ["hostname"] : [],
    level: "info",
    transport: env.isDev
        ? {
              target: "pino-pretty",
              options: {
                  colorize: true,
                  translateTime: "SYS:standard",
              },
          }
        : undefined,
    formatters: {
        level(label) {
            return {
                level: label.toUpperCase(),
            };
        },
    },
    // Use pino.stdTimeFunctions.isoTime for ISO timestamps
    timestamp: pino.stdTimeFunctions.isoTime,
};

export const log = pino(loggerOptions);
