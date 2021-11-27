import { DeleteUserRequest } from "./deleteUser.request";
import { UserRepositoryInterface } from "../../../usecases/user.repository.interface";
import { DeleteUserControllerInterface } from "./deleteUser.controller.interface";
import { DeleteUserInteractor } from "../../../usecases/deleteUser/deleteUser.interactor";
import { BooleanViewModel } from "../../presenters/boolean.viewModel";
import { BooleanPresenterInterface } from "../../presenters/boolean.presenter.interface";
import { DeleteUserRequestModel } from "../../../usecases/deleteUser/deleteUser.requestModel";

export class DeleteUserSimpleController implements DeleteUserControllerInterface {

    private _booleanPresenter: BooleanPresenterInterface
    private _deleteUserInteractor: DeleteUserInteractor

    constructor(userRepository: UserRepositoryInterface, booleanPresenter: BooleanPresenterInterface) {
        this._deleteUserInteractor = new DeleteUserInteractor(userRepository)
        this._booleanPresenter = booleanPresenter
    }

    async run(deleteUserRequest: DeleteUserRequest): Promise<BooleanViewModel> {
        const deleteUserRequestModel: DeleteUserRequestModel = deleteUserRequest

        const response = await this._deleteUserInteractor.run(deleteUserRequestModel)

        return this._booleanPresenter.present(response)
    }
}