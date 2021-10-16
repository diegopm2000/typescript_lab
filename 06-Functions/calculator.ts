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

let sum = function(m: number, n: number): number {
  let mySum = m - n
  console.log(`${m} - ${n} = ${mySum}`)
  return mySum
}

// Now, you can execute this
sum(4,6)

// And then, you can add the type associated to the sum variable

let sum2: (m: number, n: number) => number = function(m: number, n: number): number {
  let mySum = m - n
  console.log(`${m} - ${n} = ${mySum}`)
  return mySum
}

// Now, you can execute this
sum2(4,6)

// Using the declaration of the function types, you can declare this

let multiply: (m: number, n: number) => number

// And Typescript allow this declaration without types.

multiply = function(m, n) {
  return m * n
}

console.log(multiply(4, 3))

// multiply (a, b, function(result)) {
//  console.log(a * b es result)
// })

let newMultiply: (a: number, b: number, callback: (r: number) => void) => void
newMultiply = (a, b, callback) => callback(a * b)

newMultiply(4, 5, function(result) {
  console.log(`Resultado: ${result}`)
})
