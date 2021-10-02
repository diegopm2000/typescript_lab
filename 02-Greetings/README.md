# Greetings in Typescript

## 1. Install the program

```shell
npm i
```

## 2. Compile the typescript to javascript

Manually:

```shell
node_modules/.bin/tsc greetings.ts
```

Or executing the script __build__ in package.json

```json
...

"scripts": {
    "build": "tsc helloworld.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

```shell
npm run build
```

## 3. Execute the program

```shell
node helloworld.js
```
