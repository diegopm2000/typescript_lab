import { Logger } from './logger.interface'
import { ConsoleLogger } from './consoleLogger'

let logger: Logger

export class LoggerFactory {
  public static getInstance(): Logger {
    if (!logger) {
      logger = new ConsoleLogger()
    } 

    return logger
  }
}