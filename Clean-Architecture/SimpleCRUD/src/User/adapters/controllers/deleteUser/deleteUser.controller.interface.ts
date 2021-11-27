import { BooleanViewModel } from "../../presenters/boolean.viewModel";
import { DeleteUserRequest } from "./deleteUser.request";

export interface DeleteUserControllerInterface {
    run(deleteUserRequest: DeleteUserRequest): Promise<BooleanViewModel>
}