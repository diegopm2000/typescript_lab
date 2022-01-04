import { Uuid } from "../../Shared/entities/Uuid";
import { AuthCodeType } from "./AuthCodeType";
import { Phone } from "./Phone";

type Params = {
    id: Uuid,
    email: string,
    phone: Phone,
    code: string,
    codeType: AuthCodeType
}

export class AuthCode {
    private _id: Uuid
    private _email?: string
    private _phone?: Phone
    private _code: string
    private _codeType: AuthCodeType

    public get id(): Uuid {
        return this._id
    }

    public get code(): string {
        return this._code
    }

    constructor({ id, email, phone, code, codeType }: Params) {
        this._id = id
        this._email = email
        this._phone = phone
        this._code = code
        this._codeType = codeType
    }
}