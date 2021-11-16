import PieceInterface from './piece.interface'
import SquareInterface from './sqare.interface'
import BoardInterface from './board.interface'
import Square from './square'

export default class Board implements BoardInterface {

  squares: SquareInterface[][]

  constructor() {
    this.squares = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
    ]
  }

  setPiece(piece: PieceInterface, x: number, y: number): void {
    this.squares[x][y].setPiece(piece)
  }

  containsX(x: number, y: number): boolean {
    return this.squares[x][y].containsX()
  }

  containsO(x: number, y: number): boolean {
    return this.squares[x][y].containsO()
  }

  containsPiece(piece: PieceInterface, x: number, y: number): boolean {
    return this.squares[x][y].containsPiece(piece)
  }

  isEmpty(x: number, y: number): boolean {
    return this.squares[x][y].isEmpty()
  }

  toString() {
    let result = ''
    for (let x = 0; x < 3; x += 1) {
      for (let y = 0; y < 3; y += 1) {
        result += ` ${this.squares[x][y].toString()} `
        if (y == 2) {
          result += '\n'
        }
      }
    }
    return result
  }
}