// Clase Either: Es una clase genérica que puede contener un valor de tipo L (Left) o de tipo R (Right).
export abstract class Either<L, R> {
  protected constructor(private readonly leftValue?: L, private readonly rightValue?: R) {}

  public isLeft(): this is Left<L, R> {
    return this.leftValue !== undefined;
  }

  public isRight(): this is Right<L, R> {
    return this.rightValue !== undefined;
  }

  public getLeft(): L | undefined {
    return this.leftValue;
  }

  public getRight(): R | undefined {
    return this.rightValue;
  }

  public static left<L, R>(value: L): Either<L, R> {
    return new Left<L, R>(value);
  }

  public static right<L, R>(value: R): Either<L, R> {
    return new Right<L, R>(value);
  }
}

// Clase Left: Representa un valor de tipo L.
class Left<L, R> extends Either<L, R> {
  constructor(value: L) {
    super(value, undefined);
  }
}

// Clase Right: Representa un valor de tipo R.
class Right<L, R> extends Either<L, R> {
  constructor(value: R) {
    super(undefined, value);
  }
}