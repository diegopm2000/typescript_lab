function convert(value: string | number) {
  if (typeof(value) === 'string') {
    value.trim()
  } else if (typeof(value) === 'number') {
    value.toFixed()
  } else {
    // Nothing to do
  }
}

convert('abc')
convert(123)

type A = {
  one: boolean
  two: boolean
}

type B = {
  three: boolean
}

let value: A | B = { one: false, two: true }
let valueV2: A | B = { three: false}

// Discriminating unions

// In this example, we will use opType to discriminating between the two types of the union

type SumOperation = {
  summand1: number,
  summand2: number,
  opType: 'sum'
}

type MultiplyOperation = {
  operand1: number,
  operand2: number,
  opType: 'multiply'
}

type Operation = SumOperation | MultiplyOperation

function operation(op: Operation) {
  if (op.opType == 'sum') {
    return op.summand1 + op.summand2
  } else if (op.opType == 'multiply') {
    return op.operand1 + op.operand2
  }
}
