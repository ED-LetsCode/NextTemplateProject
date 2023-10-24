import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

/**
 * Custom log format that includes a timestamp.
 *
 * @param timestamp - The log timestamp.
 * @param level - The log level.
 * @param message - The log message.
 * @param route - The API route.
 * @param httpMethod - The HTTP method.
 * @returns The formatted log string.
 */
const logFormat = winston.format.printf(
  ({ timestamp, level, message, route, httpMethod, user }) => {
    return `${timestamp} [${level}] - [API: ${route} ${httpMethod}] - [${user}] - [${message}]`;
  },
);

/**
 * Log configuration options for Winston.
 */
const logConfiguration: winston.LoggerOptions = {
  format: winston.format.combine(winston.format.timestamp(), logFormat),
  transports: [
    new DailyRotateFile({
      filename: `${process.env.LOG_DIRECTORY}/%DATE%-${process.env.LOG_FILENAME}.log`,
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m", // Rotate when the file reaches 20MB
      maxFiles: "14d", // Retain logs for 14 days
      level: "error",
    }),
    new winston.transports.Console({
      level: "error",
    }),
  ],
};

/**
 * Logger instance for logging errors.
 */
export const logger = winston.createLogger(logConfiguration);

/**
 * Log errors with relevant information.
 *
 * @param httpMethod - The HTTP method.
 * @param route - The API route.
 * @param user - The user session.
 * @param error - The error message.
 */
export const logError = (
  httpMethod: string,
  route: string,
  user: string,
  error: string,
) => {
  logger.error({
    message: error,
    route: route,
    httpMethod: httpMethod,
    user: user,
  });
};
