import { Uuid } from "../../../../Shared/entities/Uuid"
import { AuthCode } from "../../../entities/AuthCode"
import { Filter } from "./Filter"

export interface AuthCodeRepository {
    getOne(filter: Filter): Promise<AuthCode>
    removeById(id: Uuid): Promise<boolean>
}