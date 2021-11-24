import { PlayerInterface } from "./player.interface";

export class Player implements PlayerInterface {

  private _id: string
  private _name: string

  constructor(id: string, name: string) {
    this._id = id
    this._name = name
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }
}