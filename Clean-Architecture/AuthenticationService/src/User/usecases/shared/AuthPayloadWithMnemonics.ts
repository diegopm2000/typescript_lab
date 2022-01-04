import { Uuid } from "../../../Shared/entities/Uuid";
import { Role } from "../../entities/Role";
import { AuthPayload } from "./AuthPayload";

export class AuthPayloadWithMnemonics extends AuthPayload {
    private _mnemonicsStr: string

    constructor(userId: Uuid, email: string, roles: Array<Role>, mnemonicsStr: string) {
        super(userId, email, roles)
        this._mnemonicsStr = mnemonicsStr
    }
}