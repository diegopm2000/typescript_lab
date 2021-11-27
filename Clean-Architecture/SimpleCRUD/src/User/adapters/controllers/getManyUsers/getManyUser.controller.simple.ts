import { GetManyUserRequest } from "./getManyUser.request";
import { UserRepositoryInterface } from "../../../usecases/user.repository.interface";
import { GetManyUserControllerInterface } from "./getManyUser.controller.interface";
import { GetManyUserInteractor } from "../../../usecases/getManyUsers/getManyUser.interactor";
import { GetManyUserRequestModel } from "../../../usecases/getManyUsers/getManyUser.requestModel";
import { UserListViewModel } from "../../presenters/userList.viewModel";
import { UserListPresenterInterface } from "../../presenters/userList.presenter.interface";

export class GetManyUserSimpleController implements GetManyUserControllerInterface {

    private _userListPresenter: UserListPresenterInterface
    private _getManyUserInteractor: GetManyUserInteractor

    constructor(userRepository: UserRepositoryInterface, userListPresenter: UserListPresenterInterface) {
        this._getManyUserInteractor = new GetManyUserInteractor(userRepository)
        this._userListPresenter = userListPresenter
    }

    async run(getManyUserRequest: GetManyUserRequest): Promise<UserListViewModel> {
        const getManyUserRequestModel: GetManyUserRequestModel = getManyUserRequest

        const response = await this._getManyUserInteractor.run(getManyUserRequestModel)

        return this._userListPresenter.present(response)
    }
}