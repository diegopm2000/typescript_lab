import { Role } from "./Role"
import { UserInterface } from "./User.interface"

type Params = {
  id: string
  email: string,
  roles: Array<Role>,
  phone: string,
  secret: string,
  mnemonics: Array<string>
}

export class User implements UserInterface {

  private _id: string
  private _email: string
  private _roles: Array<Role>
  private _phone?: string
  private _secret?: string
  private _mnemonics?: Array<string>

  constructor({ id, email, roles, phone, secret, mnemonics }: Params) {
    this._id = id
    this._email = email
    this._roles = roles
    this._phone = phone
    this._secret = secret
    this._mnemonics = mnemonics
  }

  public get id(): string {
    return this._id
  }

  public get email(): string {
      return this._email
  }

  public get roles(): Array<Role> {
    return this._roles
  }

  public get phone(): string | undefined {
      return this._phone
  }

  public get secret(): string | undefined {
    return this._secret
  }

  public get mnemonics(): Array<string> | undefined {
    return this._mnemonics
  }
}