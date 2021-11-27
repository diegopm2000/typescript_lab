import { GetOneUserRequest } from "./getOneUser.request";
import { UserRepositoryInterface } from "../../../usecases/user.repository.interface";
import { UserPresenterInterface } from "../../presenters/user.presenter.interface";
import { UserViewModel } from "../../presenters/user.viewModel";
import { GetOneUserControllerInterface } from "./getOneUser.controller.interface";
import { GetOneUserInteractor } from "../../../usecases/getOneUser/getOneUser.interactor";
import { GetOneUserRequestModel } from "../../../usecases/getOneUser/getOneUser.requestModel";

export class GetOneUserSimpleController implements GetOneUserControllerInterface {

    private _userPresenter: UserPresenterInterface
    private _getOneUserInteractor: GetOneUserInteractor

    constructor(userRepository: UserRepositoryInterface, userPresenter: UserPresenterInterface) {
        this._getOneUserInteractor = new GetOneUserInteractor(userRepository)
        this._userPresenter = userPresenter
    }

    async run(getOneUserRequest: GetOneUserRequest): Promise<UserViewModel> {
        const getOneUserRequestModel: GetOneUserRequestModel = {
            filter: getOneUserRequest.filter,
        } 

        const response = await this._getOneUserInteractor.run(getOneUserRequestModel)

        return this._userPresenter.present(response)
    }
}