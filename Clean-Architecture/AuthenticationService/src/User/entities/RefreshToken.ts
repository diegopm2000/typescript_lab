import { RefreshTokenInterface } from "./RefreshToken.interface"

type Params = {
  id: string,
  token: string,
  userId: string,
}

export class RefreshToken implements RefreshTokenInterface {
  private _id: string
  private _token: string
  private _userId: string

  constructor({ id, token, userId }: Params) {
    this._id = id
    this._token = token
    this._userId = userId
  }

  public get id(): string {
    return this._id
  }

  public get token(): string {
    return this._token
  }

  public get userId(): string {
    return this._userId
  }
}