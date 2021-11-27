import { UpdateUserInteractor } from "../../../usecases/updateUser/updateUser.interactor";
import { UpdateUserRequest } from "./updateUser.request";
import { UpdateUserRequestModel } from "../../../usecases/updateUser/updateUser.requestModel";
import { UserRepositoryInterface } from "../../../usecases/user.repository.interface";
import { UserPresenterInterface } from "../../presenters/user.presenter.interface";
import { UserViewModel } from "../../presenters/user.viewModel";
import { UpdateUserControllerInterface } from "./updateUser.controller.interface";

export class UpdateUserSimpleController implements UpdateUserControllerInterface {

    private _userPresenter: UserPresenterInterface
    private _updateUserInteractor: UpdateUserInteractor

    constructor(userRepository: UserRepositoryInterface, userPresenter: UserPresenterInterface) {
        this._updateUserInteractor = new UpdateUserInteractor(userRepository)
        this._userPresenter = userPresenter
    }

    async run(updateUserRequest: UpdateUserRequest): Promise<UserViewModel> {
        const updateUserRequestModel: UpdateUserRequestModel = {
            filter: updateUserRequest.filter,
            user: updateUserRequest.user
        } 

        const response = await this._updateUserInteractor.run(updateUserRequestModel)

        return this._userPresenter.present(response)
    }
}