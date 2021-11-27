import { UserInterface } from "./user.interface"

export class User implements UserInterface {
    
    private _id: string
    private _email: string
    private _phone: string
    private _nick: string

    public get id(): string {
        return this._id
    }
    
    public get email(): string {
        return this._email
    }

    public get phone(): string {
        return this._phone
    }

    public get nick(): string {
        return this._nick
    }

    constructor(id: string, email: string, phone: string, nick: string) {
        this._id = id
        this._email = email
        this._phone = phone
        this._nick = nick
    }
}