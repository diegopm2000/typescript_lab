import { Uuid } from "../../Shared/entities/Uuid";
import { SecretData } from "./SecretData";
import { CustomerData } from "./CustomerData";
import { Role } from "./Role";

type Params = {
    id: Uuid,
    email: string,
    roles: Array<Role>,
    secretData?: SecretData,
    customerData?: CustomerData,
}

export class User {
    private _id: Uuid
    private _email: string
    private _roles: Array<Role>
    private _secretData?: SecretData
    private _customerData?: CustomerData

    public get id(): Uuid {
        return this._id
    }

    public get email(): string {
        return this._email
    }

    public get roles(): Array<Role> {
        return this._roles
    }

    public get customerData(): CustomerData | undefined {
        return this._customerData
    }
     
    constructor({ id, email, roles, secretData, customerData }: Params) {
        this._id = id
        this._email = email
        this._roles = roles
        this._secretData = secretData
        this._customerData = customerData
    }

    
}
