// Interfaces & classes

interface Shape {
  readonly sides: number

  area(): number
  perimeter(): number
}

class Rectangle implements Shape {
  sides: number = 4

  // Shortcut to create the properties directly in the constructor witout declaring previously
  constructor(readonly width: number, readonly height: number) {

  }

  area(): number {
    return this.width * this.height
  }

  perimeter(): number {
    return (this.width * 2) + (this.height * 2)
  }
}