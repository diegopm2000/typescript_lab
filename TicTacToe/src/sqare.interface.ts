import PieceInterface from './piece.interface'

export default interface SquareInterface {

  setPiece(piece: PieceInterface): void

  containsX(): boolean

  containsO(): boolean

  containsPiece(piece: PieceInterface): boolean

  isEmpty(): boolean
}