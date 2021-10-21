interface Geometry {
    sides: number
    draw(): void
}

interface Triangle extends Geometry {
    base: number
    height: number
}

interface Square extends Geometry {
    side: number
}

function process(g: Geometry) {
   if (g.sides == 4) {
       let square = g as Square
       square.side
   } else if (g.sides == 3) {
       let triangle = g as Triangle
       triangle.height
   }
}

// instanceof works only with types or classes in javascript, not works with interfaces
// In typescript we can use "guards", to checking this in execution time and automatically convert to the interface checked

function isASquare(x: any): x is Square {
    return x.sides && x.sides == 4 && x.draw && x.side
}

function isATriangle(x: any): x is Triangle {
    return x.sides && x.sides == 3 && x.draw && x.base && x.height
}

function isAGeometry(x: any): x is Geometry {
    return x.sides && x.draw
}

function processAlt(g: Geometry) {
    if (isASquare(g)) {
        g.side
    } else if (isATriangle(g)) {
        g.height
    }
 }

