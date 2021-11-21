import { ConsoleLogger } from './src/log/consoleLogger'
import { Counter } from './src/counter'
import { AreaCalculator } from './src/areaCalculator'

const myLogger = new ConsoleLogger()

const myCounter = new Counter(0)

for (let i = 0; i < 10; ++i) {
  console.log(myCounter.currentCount())
  myCounter.incrementCount()
}

const myAreaCalculator = new AreaCalculator(myLogger)

myAreaCalculator.calculate(2, 3)