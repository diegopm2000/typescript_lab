import { Logger } from "./log/logger.interface"

export class AreaCalculator {

  constructor(private logger: Logger) {}

  public calculate(length: number, width: number): number {
    this.logger.log('Calling calculate')
    return length * width
  }
}