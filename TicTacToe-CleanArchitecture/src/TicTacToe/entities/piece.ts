import { PieceInterface } from './piece.interface'
import { PieceType } from './piece.type';

export class Piece implements PieceInterface {

  private type: PieceType

  constructor(pieceType: PieceType) {
    this.type = pieceType
  }

  isX(): boolean {
    return this.type == PieceType.X
  } 

  isO(): boolean {
    return this.type == PieceType.O
  }

  toString(): string {
    return (this.isX()) ? 'X' : 'O'
  }
}