# tsConfig in Typescript

tsconfig.json fundamentals explained in Typescript

## 1. Compiling multiple archives

Avoid mix .ts and .js in the same folder

Create tsconfig.json executing this:

```shell
node_modules/.bin/tsc --init

```

## 2. Main issues

__target__: to declare the javascript target result

__module__: type of modules used

__outDir__: output folder

Javascript modules in .js can not be used directly in typescript projects. There are two workarounds about this issue:

### 2.1 AllowsJS

__AllowJS__: to true if we want use Javascript modules from npm witout .d.ts files declaration files. Note: Does not guarantee that the module works without errors.

### 2.2 @types

Another fix is download the package from @types/<<package>>

for example:

```shell
npm i @types/is-odd
```

### 2.3 Generate the definition files automatically

__declarations__: to true

## 3. Compiling the project

```shell
node_modules/.bin/tsc
```
