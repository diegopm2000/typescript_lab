import { AuthCodeInterface } from "./AuthCode.interface";

type Params = {
  id: string,
  userId: string,
  emailCode: string,
  phoneCode: string,
}

export class AuthCode implements AuthCodeInterface {
  private _id: string
  private _userId: string
  private _emailCode: string
  private _phoneCode: string
  
  constructor({ id, userId, emailCode, phoneCode }: Params) {
    this._id = id
    this._userId = userId
    this._emailCode = emailCode
    this._phoneCode = phoneCode
  }

  public get id(): string {
    return this._id
  }

  public get userId(): string {
    return this._userId
  }

  public get emailCode(): string {
    return this._emailCode
  }

  public get phoneCode(): string {
    return this._phoneCode
  }
}