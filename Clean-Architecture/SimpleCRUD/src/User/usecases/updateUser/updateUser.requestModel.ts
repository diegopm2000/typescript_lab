import { UserInterface } from "../../entities/user.interface";
import { Filter } from "../filter.type";

export type UpdateUserRequestModel = {
    filter: Filter
    user: UserInterface
}