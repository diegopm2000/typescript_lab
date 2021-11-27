import { CountInteractor } from "../../../usecases/count/count.interactor"
import { CountRequestModel } from "../../../usecases/count/count.requestModel"
import { UserRepositoryInterface } from "../../../usecases/user.repository.interface"
import { NumberPresenterInterface } from "../../presenters/number.presenter.interface"
import { NumberViewModel } from "../../presenters/number.viewModel"
import { CountControllerInterface } from "./count.controller.interface"
import { CountRequest } from "./count.request"

export class CountSimpleController implements CountControllerInterface {

    private _numberPresenter: NumberPresenterInterface
    private _countInteractor: CountInteractor

    constructor(userRepository: UserRepositoryInterface,  numberPresenter: NumberPresenterInterface) {
        this._countInteractor = new CountInteractor(userRepository)
        this._numberPresenter = numberPresenter
    }

    async run(countRequest: CountRequest): Promise<NumberViewModel> {

        const countRequestModel: CountRequestModel = countRequest
        const response = await this._countInteractor.run(countRequestModel)

        return this._numberPresenter.present(response)
    }
}