type Coord = [x: number, y: number]

type Vector = [x: number, y: number]

type Positionable = {
  position: Coord
}

type Moveable = {
  velocity: Vector
  acceleration: Vector
}

type MovibleAndPositionable = Positionable & Moveable

let myObj: MovibleAndPositionable = {
  position: [5,5],
  velocity: [2,3],
  acceleration: [1,1]
}

