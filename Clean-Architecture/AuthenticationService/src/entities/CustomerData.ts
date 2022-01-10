import { Phone } from "./Phone"

export class CustomerData {
    private _mnemonics: Array<string>
    private _phone: Phone

    public get mnemonics(): Array<string> {
        return this._mnemonics
    }

    public get phone(): Phone {
        return this._phone
    }

    constructor(mnemonics: Array<string>, phone: Phone) {
        this._mnemonics = mnemonics
        this._phone = phone
    }
}