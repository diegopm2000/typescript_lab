import PieceInterface from './piece.interface'

export default interface BoardInterface {

  setPiece(piece: PieceInterface, x: number, y: number): void

  containsX(x: number, y: number): boolean

  containsO(x: number, y: number): boolean

  containsPiece(piece: PieceInterface, x: number, y: number): boolean
  
  isEmpty(x: number, y: number): boolean
}