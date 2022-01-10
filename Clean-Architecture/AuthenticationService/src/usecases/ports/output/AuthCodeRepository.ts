import { AuthCode } from "../../../entities/AuthCode"
import { Uuid } from "../../../entities/Uuid"
import { Filter } from "./Filter"

export interface AuthCodeRepository {
    getOne(filter: Filter): Promise<AuthCode>
    removeById(id: Uuid): Promise<boolean>
    save(authCode: AuthCode): Promise<AuthCode>
}