type Params = {
    countryCode: string,
    phoneNumber: string,
}

export class Phone {
    private _countryCode: string
    private _phoneNumber: string

    constructor({ countryCode, phoneNumber }: Params) {
        this._countryCode = countryCode
        this._phoneNumber = phoneNumber
    }

    toString(): string {
        return this._countryCode + this._phoneNumber
    }
}