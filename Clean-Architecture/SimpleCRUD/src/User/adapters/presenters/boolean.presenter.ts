import { BooleanResponseModel } from "../../usecases/boolean.responseModel";
import { BooleanPresenterInterface } from "./boolean.presenter.interface";
import { BooleanViewModel } from "./boolean.viewModel";

export class BooleanPresenter implements BooleanPresenterInterface {
    present(booleanResponseModel: BooleanResponseModel): BooleanViewModel {
        return booleanResponseModel
    }
}