class Rectangulo {

  // Private access for this variables
  private width: number
  private height: number
  // Read only (the same as final in java). Only can be set in constructor
  readonly name: string
  // Derived Atribute - The result is precalculated in constructor
  readonly areaCalculated: number

  private _color: string

  constructor(name: string, width: number, height: number) {
    console.log('constructor')
    this.name = name
    this.width = width
    this.height = height
    this.areaCalculated = width * height
  }

  // Virtual Attribute -- Alternative to Derived Attribute. The result is calculated by demand - ECMAScript 5 and higher only
  get areaCalculatedV2() {
    return this.width * this.height
  }

  get color() {
    return this._color
  }

  set color(value: string) {
    this._color = value
  }

  area() {
    return this.width * this.height
  }

  perimeter() {
    return this.width * 2 * this.height * 2
  }
}

let r1 = new Rectangulo('myRectangle', 4,5)

console.log(`area: ${r1.area()}`)
console.log(`perimeter: ${r1.perimeter()}`)
console.log(`areaCalculated: ${r1.areaCalculated}`)
console.log(`areaCalculatedV2: ${r1.areaCalculatedV2}`)

console.log(`setting color to black... ${r1.color = '#000000'}`)
console.log(`getting color: ${r1.color}`)
