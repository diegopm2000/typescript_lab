import { UserResponseModel } from "../../usecases/user.responseModel";
import { UserViewModel } from "./user.viewModel";

export interface UserPresenterInterface {
    present(userResponseModel: UserResponseModel): UserViewModel
}