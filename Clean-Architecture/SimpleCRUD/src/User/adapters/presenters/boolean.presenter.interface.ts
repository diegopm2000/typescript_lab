import { BooleanResponseModel } from "../../usecases/boolean.responseModel";
import { BooleanViewModel } from "./boolean.viewModel";

export interface BooleanPresenterInterface {
    present(booleanResponseModel: BooleanResponseModel): BooleanViewModel
}