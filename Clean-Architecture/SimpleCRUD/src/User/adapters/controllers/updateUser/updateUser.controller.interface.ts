import { UserViewModel } from "../../presenters/user.viewModel";
import { UpdateUserRequest } from "./updateUser.request";

export interface UpdateUserControllerInterface {
    run(createUserRequest: UpdateUserRequest): Promise<UserViewModel>
}