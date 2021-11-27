import { UserResponseModel } from "../../usecases/user.responseModel";
import { UserPresenterInterface } from "./user.presenter.interface";
import { UserViewModel } from "./user.viewModel";

export class UserPresenter implements UserPresenterInterface {

    public present(user: UserResponseModel): UserViewModel {
        const userViewModel: UserViewModel = {
            id: user.id,
            email: user.email,
            phone: user.phone,
            nick: user.nick
        }
        return userViewModel
    }
}