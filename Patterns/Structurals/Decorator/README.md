# Structural Pattern Decorator

- Allow to add behaviour to our object without alter their structure.
- The base class do not implements the behaviour, this work is implemented by the decorators.
- The base class and the decorators implement the same interface.
- Decorators can be aggregated like an onion to base class to add more behaviours.
- If we use more than one decorator, the last decorator added will be the first in execute its code.

Note: in this project we use ts-node to execute typescript without compiling it previously.

```url
https://www.npmjs.com/package/ts-node
```

## 1. Install the program

Execute:

```shell
npm i
```

## 2. Execute the program

Run the program

```shell
npm run start
```

Run the tests

```shell
npm run test
```
