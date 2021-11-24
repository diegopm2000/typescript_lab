import { GameRepositoryInterface } from "../../usecases/game.repository.interface";

export class MemoryGameRepositoryAdapter implements GameRepositoryInterface {
  
  private memoryRepository: MemoryRepositoryInterface

  constructor(memoryRepository: MemoryRepositoryInterface) {
    this.memoryRepository = memoryRepository
  }
}