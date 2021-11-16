import Player from './src/player'
import Board from './src/board'
import Game from './src/game'
import GameStatusType from './src/gamestatus.type'

const player1 = new Player('1', "Player 1")
const player2 = new Player('2', "Player 2")
const board = new Board();

function gamePlayerXWon() {
  const game = new Game(player1, player2, board, GameStatusType.TurnX)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerO(1, 1)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 1)
  console.log(`--> game: ${game}`)
  game.movePlayerO(2, 2)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 2)
  console.log(`--> game: ${game}`)
}

function gamePlayerOWon() {
  const game = new Game(player1, player2, board, GameStatusType.TurnX)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerO(1, 1)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 1)
  console.log(`--> game: ${game}`)
  game.movePlayerO(1, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerX(2, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerO(1, 2)
  console.log(`--> game: ${game}`)
}

function gameTie() {
  const game = new Game(player1, player2, board, GameStatusType.TurnO)
  console.log(`--> game: ${game}`)
  game.movePlayerO(1, 1)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 1)
  console.log(`--> game: ${game}`)
  game.movePlayerO(1, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerX(2, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerO(0, 2)
  console.log(`--> game: ${game}`)
  game.movePlayerX(0, 0)
  console.log(`--> game: ${game}`)
  game.movePlayerO(2, 2)
  console.log(`--> game: ${game}`)
  game.movePlayerX(1, 2)
  console.log(`--> game: ${game}`)
  game.movePlayerO(2, 1)
  console.log(`--> game: ${game}`)
}


// Example games

// gamePlayerXWon()
// gamePlayerOWon()
gameTie()