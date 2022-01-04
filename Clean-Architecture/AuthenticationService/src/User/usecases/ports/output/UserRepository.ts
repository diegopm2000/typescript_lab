import { User } from "../../../entities/User";
import { Filter } from "./Filter";

export interface UserRepository {
    getOne(filter: Filter): Promise<User>
}