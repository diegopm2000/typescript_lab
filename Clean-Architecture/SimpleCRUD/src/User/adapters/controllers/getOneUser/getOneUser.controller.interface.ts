import { UserViewModel } from "../../presenters/user.viewModel";
import { GetOneUserRequest } from "./getOneUser.request";

export interface GetOneUserControllerInterface {
    run(getOneUserRequest: GetOneUserRequest): Promise<UserViewModel>
}