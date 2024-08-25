import { DivisionByNegativeNumbersNotAllowed, DivisionByZeroError, IDivideRequest, IDivideResponse } from "./IDivideService";
import { IService } from "./IService";
import { Either } from "./Either"

export class DivideService implements IService<IDivideRequest, IDivideResponse> {
  execute(request: IDivideRequest): IDivideResponse {
    if (request.valueB == 0) {
      return Either.left(new DivisionByZeroError())
    }
    if (request.valueB < 0) {
      return Either.left(new DivisionByNegativeNumbersNotAllowed())
    }

    const innerResult = request.valueA / request.valueB

    return Either.right(innerResult)
  }
}
