import { GameInterface } from "../../entities/game.interface";

export interface GameMemoryRepositoryInterface {
  getOne(filter: Object): Promise<GameInterface>
  update(filter: Object, game: GameInterface): Promise<GameInterface>
}