import { CreateUserInteractor } from "../../../usecases/createUser/createUser.interactor";
import { CreateUserRequestModel } from "../../../usecases/createUser/createUser.requestModel";
import { UserRepositoryInterface } from "../../../usecases/user.repository.interface";
import { UuidGeneratorInterface } from "../../../usecases/uuid.generator.interface";
import { UserPresenterInterface } from "../../presenters/user.presenter.interface";
import { UserViewModel } from "../../presenters/user.viewModel";
import { CreateUserControllerInterface } from "./createUser.controller.interface";
import { CreateUserRequest } from "./createUser.request";

export class CreateUserSimpleController implements CreateUserControllerInterface {

    private _userPresenter: UserPresenterInterface
    private _createUserInteractor: CreateUserInteractor

    constructor(userRepository: UserRepositoryInterface, uuidGenerator: UuidGeneratorInterface, userPresenter: UserPresenterInterface) {
        this._createUserInteractor = new CreateUserInteractor(userRepository, uuidGenerator)
        this._userPresenter = userPresenter
    }

    async run(createUserRequest: CreateUserRequest): Promise<UserViewModel> {
        const createUserRequestModel: CreateUserRequestModel = {
            email: createUserRequest.email,
            phone: createUserRequest.phone,
            nick: createUserRequest.nick
        } 

        const response = await this._createUserInteractor.run(createUserRequestModel)

        return this._userPresenter.present(response)
    }
}