import { UserViewModel } from "../../presenters/user.viewModel";
import { GetManyUserRequest } from "./getManyUser.request";

export interface GetManyUserControllerInterface {
    run(getManyUserRequest: GetManyUserRequest): Promise<Array<UserViewModel>>
}