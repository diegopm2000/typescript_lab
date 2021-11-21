import { Logger } from "./logger.interface";

export class ConsoleLogger implements Logger {
  
  public log(message: string): void {
    console.log(message)
  }
}