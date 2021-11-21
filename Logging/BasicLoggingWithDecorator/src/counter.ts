import { usefulLog } from "./decorators/logdecorator"

export class Counter {

  constructor(private counter = 0) {

  }

  @usefulLog()
  public currentCount(): number {
    return this.counter
  }

  @usefulLog()
  public incrementCount(): void {
    this.counter++
  }
}