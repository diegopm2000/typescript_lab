import { IService } from "./IService"
import { Either } from "./Either"

export class DivisionByZeroError extends Error {
  constructor() {    
    super('Division by zero not possible')
  }
}

export class DivisionByNegativeNumbersNotAllowed extends Error {
  constructor() {
    super('Division by negative numbers not allowed')
  }
}

export interface IDivideRequest {
  valueA: number
  valueB: number
}

export type IDivideResponse = Either<DivisionByZeroError | DivisionByNegativeNumbersNotAllowed, number>

export interface IDivideService extends IService<IDivideRequest, IDivideResponse> {}
