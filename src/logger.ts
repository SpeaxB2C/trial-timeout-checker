import config from "config";
import pino, { LoggerOptions as PinoOptions, Logger, TransportSingleOptions } from "pino";

type LoggerOptions = { level?: string; prettyPrint?: boolean };

const baseOptions: PinoOptions = {
  formatters: {
    level(label): Record<string, string> {
      return { level: label };
    },
  },
};

const jsLogger = (options?: LoggerOptions, destination: string | number = 1): Logger => {
  let transport: TransportSingleOptions | undefined = undefined;

  if (options?.prettyPrint === true) {
    transport = { target: "pino-pretty" };
    delete options.prettyPrint;
  }

  const pinoOptions: PinoOptions = { ...baseOptions, ...options, transport };
  return pino(pinoOptions, pino.destination(destination));
};

const loggerConfig = config.get<LoggerOptions>("logger");
const logger = jsLogger({ ...loggerConfig, prettyPrint: loggerConfig.prettyPrint });
export default logger;
