import { NumberResponseModel } from "../../usecases/number.responseModel";
import { NumberPresenterInterface } from "./number.presenter.interface";
import { NumberViewModel } from "./number.viewModel";

export class NumberPresenter implements NumberPresenterInterface {
    present(numberResponseModel: NumberResponseModel): NumberViewModel {
        return numberResponseModel
    }
}