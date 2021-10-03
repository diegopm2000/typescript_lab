// Add

function add(a, b) {
  let result = a + b
  console.log(`${a} + ${b} = ${result}`)
  return result
}

add(3, 4)

add(false, true) // result is equals to 1 becase the autocast used in javascript

function typedSum(a: number, b: number): number {
  let result = a + b
  console.log(`${a} + ${b} = ${result}`)
  return result
}

typedSum(5, 6)

typedSum(false, true) // compilation error in typescript
