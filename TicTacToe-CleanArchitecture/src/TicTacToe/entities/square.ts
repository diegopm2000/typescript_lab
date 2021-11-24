import { PieceInterface } from './piece.interface'
import { SquareInterface } from './sqare.interface'

export class Square implements SquareInterface {
  
  private piece!: PieceInterface

  setPiece(piece: PieceInterface): void {
    this.piece = piece
  }

  containsX(): boolean {
    return this.piece.isX()
  }

  containsO(): boolean {
    return this.piece.isO()
  }

  containsPiece(piece: PieceInterface): boolean {
    if (this.isEmpty()) {
      return false
    } else if (piece.isX()){
      return this.containsX()
    } else {
      return this.containsO()
    }
  }

  isEmpty(): boolean {
    return (!this.piece)
  }

  toString() {
    if (this.isEmpty()) {
      return '-'
    } else {
      return this.piece.toString()
    }
  }
}