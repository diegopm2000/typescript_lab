import { DivisionByNegativeNumbersNotAllowed, DivisionByZeroError, IDivideRequest, IDivideResponse } from "./IDivideService";
import { IService } from "./IService";
import { Result } from "./Result"

export class DivideService implements IService<IDivideRequest, IDivideResponse> {
  execute(request: IDivideRequest): IDivideResponse {
    if (request.valueB == 0) {
      return Result.err(new DivisionByZeroError())
    }
    if (request.valueB < 0) {
      return Result.err(new DivisionByNegativeNumbersNotAllowed())
    }

    const innerResult = request.valueA / request.valueB

    return Result.ok(innerResult)
  }
}
