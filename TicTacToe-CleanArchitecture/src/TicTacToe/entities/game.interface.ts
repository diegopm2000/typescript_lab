import { BoardInterface } from "./board.interface";
import { GameStatusType } from "./gamestatus.type";
import { MovementResultType } from "./movementrestult.type";
import { PlayerInterface } from "./player.interface";

export interface GameInterface {

  id: String

  status: GameStatusType

  playerO: PlayerInterface
  
  playerX: PlayerInterface
  
  board: BoardInterface

  movePlayerX(x: number, y: number): MovementResultType
  
  movePlayerO(x: number, y: number): MovementResultType

  movePlayerById(idPlayer: String, x: number, y: number): MovementResultType

}