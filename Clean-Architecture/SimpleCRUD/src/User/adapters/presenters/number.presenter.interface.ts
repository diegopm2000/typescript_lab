import { NumberResponseModel } from "../../usecases/number.responseModel";
import { NumberViewModel } from "./number.viewModel";

export interface NumberPresenterInterface {
    present(numberResponseModel: NumberResponseModel): NumberViewModel
}