import { Filter } from "../../../usecases/filter.type";
import { UserInterface } from "../../../entities/user.interface";

export type UpdateUserRequest = {
    filter: Filter
    user: UserInterface
}