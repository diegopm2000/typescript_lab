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

// Alternative, not recommended

function processv2(g: Geometry) {
    if (g.sides == 4) {
        let square = (<Square> g)
        square.side
    } else if (g.sides == 3) {
        let triangle = (<Triangle> g)
        triangle.height
    }
 }
