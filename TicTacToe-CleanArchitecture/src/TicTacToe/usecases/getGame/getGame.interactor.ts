import { GameInterface } from "../../entities/game.interface"
import { GameRepositoryInterface } from "../game.repository.interface"

type Params = {
  idGame: String,
 }

export class MoveInteractor {

  private gameRepository: GameRepositoryInterface

  constructor(gameRepository: GameRepositoryInterface) {
    this.gameRepository = gameRepository
  }
  
  async execute({ idGame }: Params): Promise<GameInterface> {

    const myGame = await this.gameRepository.getOne({ id: idGame })

    return myGame
  }
}