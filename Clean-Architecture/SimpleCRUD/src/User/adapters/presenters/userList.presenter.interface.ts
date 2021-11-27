import { UserListResponseModel } from "../../usecases/userlist.responseModel";
import { UserListViewModel } from "./userList.viewModel";

export interface UserListPresenterInterface {
    present(userListResponseModel: UserListResponseModel): UserListViewModel
}