/* boolean */
let logical = false; // Declaring the type is not mandatory in local variables. We can set this in the project configuration
let falseLogical: boolean = false
let trueLogical: boolean = true

/* number */
let myInteger = 44
let myAnotherInteger: number = 44
let myDecimal = 26.05
let myAnotherDecimal: number = 26.05
let myHexadecimal: number = 0xff
let myOctal: number = 0o7
let myLargeNumber: number = 1_000_000_000

/* string */
let myStringwithSingleQuotes = 'abcdefghijk'
let myAnotherStringwithSingleQuotes: string = 'abcdefghijk'
let StringWithDoubleQuotes = "abcdefghijk"
let StringAnotherWithDoubleQuotes: string = "abcdefghijk"

// New Typescript Types

// The transpiler will not transpile theese types to javascript. Only will be used to operate.

/* any */
let someVariableOfAnyType: any // Indicates to transpiler that ignore the type. Allows to set any type to the variable.

someVariableOfAnyType = 5
someVariableOfAnyType = false

/* null */
let nothing: null = null // We will use this type when we work with optional parameters in functions by example using unions

/* undefined */
let myUndefinedVariable: undefined = undefined // Idem, that the null case

/* void */
function greetings(): void {
  console.log('Hello') // Used to indicates that the function have no return
}
