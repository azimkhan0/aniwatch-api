import type { MiddlewareHandler } from "hono";
import { logger as honoLogger } from "hono/logger";
import { log } from "../config/logger.js";

export const logging: MiddlewareHandler = honoLogger(
    (msg: string, ...rest: string[]) => {
        // Option 1: Simple message logging
        log.info(`${msg} ${rest.join(' ')}`);
        
        // Option 2: Structured logging (alternative)
        // log.info({ message: msg, extra: rest });
    }
);
