# Either Pattern in TypeScript

This project demonstrates the use of the `Either` pattern in TypeScript, a common approach to handle values that can be one of two possible types. The `Either` pattern provides a way to represent a result that can be either a success or an alternative outcome, enhancing code clarity and error handling.

## 1. What is the Either Pattern?

The `Either` pattern is used to represent a value that can be one of two types. This pattern is particularly useful in functional programming and scenarios where you need to handle alternative results or errors explicitly.

- **Left**: Typically represents an error or an alternative outcome.
- **Right**: Typically represents a successful result or the main outcome.

## 2. Benefits of Using the Either Pattern

1. **Explicit Handling**: Forces explicit handling of both possible outcomes, making the code more predictable and reducing the chances of missing error cases.
2. **Flexibility**: Can represent any two possible outcomes, not just success and failure.
3. **Functional Programming**: Aligns well with functional programming principles, where handling of errors and results is done in a functional and declarative way.

## 3. Example Implementation

Here’s how you can implement the `Either` pattern in TypeScript:

```typescript
// Define the Either class with Left and Right variants
abstract class Either<L, R> {
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

// Left class represents an alternative outcome
class Left<L, R> extends Either<L, R> {
  constructor(value: L) {
    super(value, undefined);
  }
}

// Right class represents a successful outcome
class Right<L, R> extends Either<L, R> {
  constructor(value: R) {
    super(undefined, value);
  }
}
```

### 4. Execution

Execute this:

```shell
npm run start
```

With the next results:

```shell
----> a: 10, b:: 20 isRight: true, isLeft: false
----> a: 10, b:: 0 isRight: false, isLeft: true
----> a: 10, b:: -1 isRight: false, isLeft: true
```
