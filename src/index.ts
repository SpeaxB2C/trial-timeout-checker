import logger from "./logger";

export function hello(who: string): string {
  return `Hello ${who}!`;
}

logger.info(hello("SpeaX-B2C"));
