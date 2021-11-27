import { UserInterface } from "../entities/user.interface";
import { Filter } from "./filter.type";

export interface UserRepositoryInterface {
    getOne(filter: Filter): Promise<UserInterface>
    getMany(filter: Filter): Promise<Array<UserInterface>>
    update(filter: Filter, user: UserInterface): Promise<UserInterface>
    deleteOne(filter: Filter): Promise<boolean>
    count(filter: Filter): Promise<number> 
}