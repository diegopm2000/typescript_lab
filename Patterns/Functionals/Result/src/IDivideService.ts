import { IService } from "./IService"
import { Result } from "./Result"

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

export type IDivideResponse = Result<number, DivisionByZeroError | DivisionByNegativeNumbersNotAllowed>

export interface IDivideService extends IService<IDivideRequest, IDivideResponse> {}
