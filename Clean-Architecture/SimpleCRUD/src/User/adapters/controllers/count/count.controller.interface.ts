import { NumberViewModel } from "../../presenters/number.viewModel";
import { CountRequest } from "./count.request";

export interface CountControllerInterface {
    run(countRequest: CountRequest): Promise<NumberViewModel>
}