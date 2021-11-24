import { UuidGeneratorInterface } from "../../../Shared/usecases/uuid.generator.interface";
import { BoardInterface } from "../../entities/board.interface";
import { Game } from "../../entities/game"
import { GameStatusType } from "../../entities/gamestatus.type";
import { PlayerInterface } from "../../entities/player.interface";
import { GameRepositoryInterface } from "../game.repository.interface"

type Params = {
  player1: PlayerInterface
  player2: PlayerInterface
  board: BoardInterface
  status: GameStatusType
}

export class CreateGameInteractor {

  private gameRepository: GameRepositoryInterface
  private uuidGenerator: UuidGeneratorInterface

  constructor(gameRepository: GameRepositoryInterface, uuidGenerator: UuidGeneratorInterface) {
    this.gameRepository = gameRepository
    this.uuidGenerator = uuidGenerator
  }
  
  async execute({ player1, player2, board, status}: Params): Promise<void> {

    // TODO ver como montar el gameId como value object más adelante
    // ahora lo que más me importa es dónde monto el gameRepository implementado y el uuidGenerator
    const gameId = this.uuidGenerator.generate()

    const newGame = new Game(gameId, player1, player2, board, status)

    await this.gameRepository.update({ id: gameId }, newGame)
    
  }

}