import { UserViewModel } from "../../presenters/user.viewModel";
import { CreateUserRequest } from "./createUser.request";

export interface CreateUserControllerInterface {
    run(createUserRequest: CreateUserRequest): Promise<UserViewModel>
}