import { MovementResultType } from "../../entities/movementrestult.type"
import { GameRepositoryInterface } from "../game.repository.interface"

type Params = {
 idGame: String,
 idPlayer: String
 x: number,
 y: number,
}

export class MoveInteractor {

  private gameRepository: GameRepositoryInterface

  constructor(gameRepository: GameRepositoryInterface) {
    this.gameRepository = gameRepository
  }
  
  async execute({ idGame, idPlayer, x, y }: Params): Promise<MovementResultType> {

    const myGame = await this.gameRepository.getOne({ id: idGame })

    const result = myGame.movePlayerById(idPlayer, x, y)

    await this.gameRepository.update({ id: myGame.id }, myGame)

    return result
  }
}