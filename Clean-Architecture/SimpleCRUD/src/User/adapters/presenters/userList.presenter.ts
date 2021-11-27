import { UserListResponseModel } from "../../usecases/userlist.responseModel";
import { UserListPresenterInterface } from "./userList.presenter.interface";
import { UserListViewModel } from "./userList.viewModel";

export class UserListPresenter implements UserListPresenterInterface {

    public present(userList: UserListResponseModel): UserListViewModel {
        const userListViewModel: UserListViewModel = userList
        return userListViewModel
    }
}