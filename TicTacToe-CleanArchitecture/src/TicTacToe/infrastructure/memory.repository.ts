import _, { reject } from 'lodash'

import { GameMemoryRepositoryInterface } from "../adapters/gateways/game.memory.repository.interface";
import { GameInterface } from "../entities/game.interface";

export class GameMemoryRepository implements GameMemoryRepositoryInterface {

  private database: GameInterface[]

  constructor() {
    this.database = []
  }

  getOne(filter: Object): Promise<GameInterface> {
    return new Promise((resolve, reject) => {
      const result = _.find(this.database, _.matches(filter));

      if (result) {
        resolve(result)
      } else {
        reject(new Error('game not found'))
      }
    })
  }

  update(filter: Object, gameToUpdate: GameInterface): Promise<GameInterface> {
    return new Promise((resolve, reject) => {
      const result = _.find(this.database, _.matches(filter));

      if (!result) {
        reject(new Error('game not found'))
      }

      const index = _.indexOf(this.database, result)

      if (index == -1) {
        reject(new Error('game not found'))
      }
  
      this.database[index] = gameToUpdate;
      resolve(gameToUpdate)
    })
  }
}