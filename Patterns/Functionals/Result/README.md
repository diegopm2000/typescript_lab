# Result Pattern in TypeScript

This project demonstrates the use of the `Result` pattern in TypeScript, a common way to handle operations that may either succeed or fail. The `Result` pattern provides a structured approach to managing success and error cases without relying on exceptions, leading to more predictable and robust code.

## 1. What is the Result Pattern?

The `Result` pattern is used to represent the outcome of an operation that can either succeed or fail. This is done by encapsulating the possible success or error values into a single type, typically:

- **Success** (`Ok`): Contains the result of a successful operation.
- **Error** (`Err`): Contains the error information if the operation fails.

## 2.Benefits of Using the Result Pattern

1. **Clarity**: By explicitly defining success and error cases, your code becomes more self-documenting.
2. **Error Handling**: Encourages handling errors immediately, making it harder to ignore potential issues.
3. **Type Safety**: With TypeScript, you get type-safe handling of success and error cases, ensuring that all cases are considered.

## 3.Example Implementation

Here's a brief look at how the `Result` pattern can be implemented and used:

```typescript
// Define the Result class with Ok and Err variants
abstract class Result<T, E> {
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
```

### 4. Execution

Execute this:

```shell
npm run start
```

With the next results:

```shell
----> a: 10, b:: 20 isOk: true, isErr: false
----> a: 10, b:: 0 isOk: false, isErr: true
----> a: 10, b:: -1 isOk: false, isErr: true
```
