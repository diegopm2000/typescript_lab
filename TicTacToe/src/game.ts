import BoardInterface from "./board.interface";
import GameInterface from "./game.interface";
import GameStatusType from "./gamestatus.type";
import MovementResultType from "./movementrestult.type";
import Piece from "./piece";
import PieceInterface from "./piece.interface";
import PieceType from "./piece.type";
import PlayerInterface from "./player.interface";

export default class Game implements GameInterface {

  private _status: GameStatusType;
  
  private _playerO: PlayerInterface

  private _playerX: PlayerInterface;
  
  private _board: BoardInterface;

  // Private Methods

  private pieceWonTheGame(piece: PieceInterface): boolean {
    const diagonalA = [[0,0], [1, 1], [2, 2]]
    const diagonalB = [[0,2], [1, 1], [2, 0]]
    const horizontalA = [[0,0], [0, 1], [0, 2]]
    const horizontalB = [[1,0], [1, 1], [1, 2]]
    const horizontalC = [[2,0], [2, 1], [2, 2]]
    const verticalA = [[0,0], [1, 0], [2, 0]]
    const verticalB = [[0,1], [1, 1], [2, 1]]
    const verticalC = [[0,2], [1, 2], [2, 2]]
    return (
      diagonalA.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      diagonalB.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      horizontalA.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      horizontalB.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      horizontalC.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      verticalA.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      verticalB.every((element) => this._board.containsPiece(piece, element[0], element[1])) ||
      verticalC.every((element) => this._board.containsPiece(piece, element[0], element[1])) 
    )
  }

  private boardIsFull(): boolean {
    const allSquares = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]

    return !allSquares.some((element) => this._board.isEmpty(element[0], element[1]))
  }

  private buildStatus(lastPieceMoved: PieceInterface | null): void {
    
    if (lastPieceMoved) {
      // Check if a piece won the game --> PlayerXWon or PlayerOWon
      const pieceIsWinner = this.pieceWonTheGame(lastPieceMoved)
  
      if (pieceIsWinner) {
        this._status = lastPieceMoved.isX() ? GameStatusType.PlayerXWon : GameStatusType.PlayerOWon
        return
      }
        
      // Check if all board is full --> Tie Condition
      const boardIsFull = this.boardIsFull()

      if (boardIsFull) {
        this._status = GameStatusType.Tie
        return
      } 
      
      // Check if last piece moved was X or O
      if (lastPieceMoved.isX()) {
        this._status = GameStatusType.TurnO
      } else {
        this._status = GameStatusType.TurnX
      }
    } else {
      // At the beginning, always put the turn to X player
      this._status = GameStatusType.TurnX
    }
  }

  private calculateMovementResult(piece: PieceInterface, x: number, y: number): MovementResultType {

    // Check if game has finished
    if (this._status === GameStatusType.PlayerXWon || 
        this._status === GameStatusType.PlayerOWon ||
        this._status === GameStatusType.Tie) {
      return MovementResultType.GameFinished
    }

    // Check if is valid turn
    if ((piece.isX() && this._status === GameStatusType.TurnO) ||
        (piece.isO() && this._status === GameStatusType.TurnX)) {
      return MovementResultType.BadTurn
    }

    // Check if the square is occupied
    if (!this._board.isEmpty(x, y)) {
      return MovementResultType.SquareOccupied
    }

    return MovementResultType.Ok
  }

  // Getters

  public get status(): GameStatusType {
    return this._status;
  }

  public get playerO(): PlayerInterface {
    return this._playerO;
  }

  public get playerX(): PlayerInterface {
    return this._playerX;
  }

  public get board(): BoardInterface {
    return this._board;
  }

  // Constructor
  
  constructor(playerO: PlayerInterface, playerX: PlayerInterface, board: BoardInterface, status: GameStatusType) {
    this._playerO = playerO
    this._playerX = playerX
    this._board = board
    this._status = status
  }

  public movePlayerX(x: number, y: number): MovementResultType {

    const myPiece = new Piece(PieceType.X)

    const movementResult = this.calculateMovementResult(myPiece, x, y)

    if (movementResult == MovementResultType.Ok) {
      this.board.setPiece(myPiece, x, y)
      this.buildStatus(myPiece)
    }

    return movementResult
  }

  public movePlayerO(x: number, y: number): MovementResultType {
    const myPiece = new Piece(PieceType.O)

    const movementResult = this.calculateMovementResult(myPiece, x, y)

    if (movementResult == MovementResultType.Ok) {
      this.board.setPiece(myPiece, x, y)
      this.buildStatus(myPiece)
    }

    return movementResult
  }

  public toString(): string {
    let result = ''

    let stringStatus
    // Build the string status
    switch (this._status) {
      case GameStatusType.TurnX:
        stringStatus = 'Turn X'
        break
        case GameStatusType.TurnO:
          stringStatus = 'Turn O'
          break
      case GameStatusType.PlayerXWon:
        stringStatus = 'Player X Won'
        break
      case GameStatusType.PlayerOWon:
        stringStatus = 'Player O Won'
        break
      case GameStatusType.Tie:
        stringStatus = 'Tie'
        break
      default:
        throw new Error('status not valid')
    }

    result += `status: ${stringStatus}`
    result += `\n${this.board}`

    return result
  }
}