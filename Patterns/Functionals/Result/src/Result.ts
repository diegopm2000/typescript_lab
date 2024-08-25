// Define the Result class with Ok and Err variants
export abstract class Result<T, E> {
  protected constructor(public readonly isSuccess: boolean, public readonly error?: E, public readonly value?: T) {}

  public isOk(): this is Ok<T, E> {
    return this.isSuccess;
  }

  public isErr(): this is Err<T, E> {
    return !this.isSuccess;
  }

  public static ok<U, F>(value: U): Result<U, F> {
    return new Ok<U, F>(value);
  }

  public static err<U, F>(error: F): Result<U, F> {
    return new Err<U, F>(error);
  }
}

// Ok class represents a successful result
class Ok<T, E> extends Result<T, E> {
  constructor(value: T) {
    super(true, undefined, value);
  }
}

// Err class represents a failed result
class Err<T, E> extends Result<T, E> {
  constructor(error: E) {
    super(false, error);
  }
}